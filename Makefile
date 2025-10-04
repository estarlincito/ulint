PR = pnpm run

r:
	$(PR) release
m:
	lineo md 'src/**/*.ts' --outFile code.md --outDir temp	
t:
	$(PR) check-types
l:
	$(PR) lint
c:
	$(PR) clean
b:
	$(PR) build
d:
	$(PR) dev
s:
	$(PR) start	$(ARGS)