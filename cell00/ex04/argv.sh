#!/bin/bash
if [ $# -eq 0 ]	
then 
	echo "No arguments supplied"
else 
	counter=0
	for var in "$@"
	do
		if [ $counter -lt 3 ]
		then
			echo "$var"
			((counter++))
		fi
	done
fi
