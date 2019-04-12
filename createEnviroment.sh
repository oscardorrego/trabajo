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

function createEnviroment {
    path=$6
    createDorF -d $1 && cd $1
    for((i=$3;i<$4;i++)); do
        nameFile="$2$i$(($i + 1)).$5"
        createDorF -f $nameFile 
        curl --request GET -sL --user-agent 'Shellman' --url "$path$nameFile" > $nameFile
    done
}

cat "$filepath" | sed -e '/#/d' | while read -r line || [[ -n "$line" ]]; do
    IFS=';'
    read -ra PARAMS <<< "$line"
    if [ $count = 0 ]; then path=PARAMS[0]; else 
        createEnviroment $PARAMS[0] $PARAMS[1] 10 19 csv
        for item in "${PARAMS[@]}";do
            
        done
    fi
    count=$(($count+1))
done
