class AddNameToCategory3s < ActiveRecord::Migration[5.2]
  def change
    add_column :category3s, :category3_name, :string
  end
end
