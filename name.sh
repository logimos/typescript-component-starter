#! /bin/bash

read -p "Enter your GitHub username: " username
read -p "Enter your repository name: " repo_name

echo "Your GitHub username is: $username"
echo "Your repository name is: $repo_name"

# Replace placeholders in all files
find . -type f -exec sed -i "s/@<your-github-username>/<your-repo-name>/g" {} +

echo "All placeholders have been replaced."
