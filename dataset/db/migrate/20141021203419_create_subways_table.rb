class CreateSubwaysTable < ActiveRecord::Migration
  def change
  	create_table :subways do |t|
  		t.string :url
  		t.string :name
  		t.string :line
  	end
  end
end
