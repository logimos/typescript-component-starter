{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_22 # Installs Node.js version 22.x
    # Add other system dependencies here if needed (e.g., pkgs.git)
  ];

  shellHook = ''
    echo "Nix environment loaded."
    echo "Node version: $(node --version)"
    echo "npm version: $(npm --version)"
    # You can add other environment setup commands here
    # export MY_ENV_VAR="value"
  '';
}