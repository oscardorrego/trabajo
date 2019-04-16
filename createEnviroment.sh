#!/usr/bin/env bash
filepath=rest.config
path=""
count=0

function isNotEmpty {
    if [ -n $1 ]; then echo 0; else echo 1; fi
}

function createDorF {
    case $1 in
        "-f")
            if [ $(isNotEmpty $2) = 0 -a ! -f $2 ]; then touch $2; fi
        ;;
        "-d")
            if [ $(isNotEmpty $2) = 0 -a ! -d $2 ]; then mkdir $2 && cd $2; fi
        ;;
    esac
}

# 1 -> Name of the dir
# 2 -> name of the league()
# 3 -> year from
# 4 -> year to
# 5 -> extension file
# 6 -> path to request
function createEnviroment {
    path=$6
    echo $path
    createDorF -d $1 && cd $1
    createDorF -d $2 && cd $2
    for((j=$3;j<$4;j++)); do
        nameFile="$2_$i_$(($j + 1)).$5"
        echo $nameFile
        createDorF -f $nameFile 
        curl --request GET -sL --user-agent 'Shellman' --url "$path/$j$(($j + 1))/$2.$5" > $nameFile
    done
    cd ../../
}

#createDorF -d leagues && cd leagues

cat "$filepath" | sed -e '/#/d' | while read -r line || [[ -n "$line" ]]; do
    IFS=';'
    read -ra PARAMS <<< "$line"
    if [ $count = 0 ]; then path=${PARAMS[0]}; else 
        for((i=0;i<${#PARAMS[@]};i++)); do
            if [ $i != 0 ]; then createEnviroment ${PARAMS[0]} ${PARAMS[$i]} 10 19 csv $path; fi
        done
    fi
    count=$(($count+1))
done
