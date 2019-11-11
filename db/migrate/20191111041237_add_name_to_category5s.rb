class AddNameToCategory5s < ActiveRecord::Migration[5.2]
  def change
    add_column :category5s, :category5_name, :string
  end
end
