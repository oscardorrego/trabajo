@echo off
REM @param {Integer} from =  from 0 to 19 representing the year of the ligue
REM @param {Integer} to   =  from 0 to 19 representing the year of the ligue
REM @param {String} Ligue =  The name of the ligue. For example SP for Spain. Have a look to this URL (http://www.football-data.co.uk/data.php) and choose the ligue going to the code...
REM format of the year: YY, for example: 1997 is 97
SETLOCAL ENABLEDELAYEDEXPANSION
SET lowerYear=0
SET greaterYear=19
SET number=9

IF %1 GEQ %lowerYear% IF %1 LEQ %greaterYear% IF %2 GEQ %lowerYear% IF %2 LEQ %greaterYear% ( 
    SET first=%1
    SET second=%2
    SET ligue=%3
    IF %first% LEQ %number% SET "first=0%first%"
    IF %second% LEQ %number% SET "second=0%second%"
    IF NOT EXIST %ligue% MD %ligue%
    IF EXIST %ligue% ( 
        CD %ligue%
        FOR /L %%G IN (%1,1,%2) DO (
            SET "temp=%%G + %1 + 1"
            curl -v http://www.football-data.co.uk/mmz4281/%first%%second%/%31.csv > %31!temp!.csv
        )
    ) ELSE (
        echo error
    )
) ELSE (
    echo %3 
    REM EXIT 1 
)
ENDLOCAL