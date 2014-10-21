require 'bundler'
Bundler.require

require_relative 'connection'
require_relative 'models/subway'


get '/' do
	
	@subways = Subway.all
	erb :index
end