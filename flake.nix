{
  description = "Dev environment for setup-nextflow";
  outputs = { self, nixpkgs }: {
    # setup the devShell for x86_64-linux.
    devShell.x86_64-linux = with nixpkgs.legacyPackages.x86_64-linux;
      mkShell {
        buildInputs = [ nodejs ];

        shellHook = ''
          # add extension
        '';
      };
  };
}
