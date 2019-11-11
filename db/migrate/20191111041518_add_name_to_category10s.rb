class AddNameToCategory10s < ActiveRecord::Migration[5.2]
  def change
    add_column :category10s, :category10_name, :string
  end
end
