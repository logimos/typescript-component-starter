#! /bin/bash

read -p "Enter your GitHub username: " username
read -p "Enter your repository name: " repo_name

echo "Your GitHub username is: $username"
echo "Your repository name is: $repo_name"

script_name=$(basename "$0")
# Replace placeholders in all files except name.sh
find . -type f ! -name "$script_name" ! -name "*.sh" -exec sed -i "s/@<your-github-username>/@$username/g" {} +
find . -type f ! -name "$script_name" ! -name "*.sh" -exec sed -i "s/<your-github-username>/$username/g" {} +
find . -type f ! -name "$script_name" ! -name "*.sh" -exec sed -i "s/<your-repo-name>/@$repo_name/g" {} +

echo "All placeholders have been replaced."
