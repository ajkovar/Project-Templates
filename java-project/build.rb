#!/usr/bin/env ruby
# -*- ruby -*-
# $LOAD_PATH << File.join( File.dirname(__FILE__), '..', 'lib' )

Dir.chdir "src"
system "javac -d ../bin #{ARGV[0]}"
