.PHONY : dev
dev :
	hugo server -D

.PHONY : public
public :
	hugo --minify

.PHONY : clean
clean :
	rm -rf public
