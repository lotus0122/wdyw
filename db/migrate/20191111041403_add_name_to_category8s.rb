class AddNameToCategory8s < ActiveRecord::Migration[5.2]
  def change
    add_column :category8s, :category8_name, :string
  end
end
