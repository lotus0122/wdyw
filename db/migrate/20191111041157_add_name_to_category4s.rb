class AddNameToCategory4s < ActiveRecord::Migration[5.2]
  def change
    add_column :category4s, :category4_name, :string
  end
end
