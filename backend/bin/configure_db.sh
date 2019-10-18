#!/bin/bash

echo "Configuring dragonstackdb"

dropdb -U node_user dragonstackdb

echo "dropped db"

createdb -U node_user dragonstackdb

echo " created db"

psql -U node_user dragonstackdb < ./bin/sql/generation.sql
psql -U node_user dragonstackdb < ./bin/sql/dragon.sql

echo  "dragonstackdb configured"