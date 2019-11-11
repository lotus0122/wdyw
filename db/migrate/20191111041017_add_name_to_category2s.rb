class AddNameToCategory2s < ActiveRecord::Migration[5.2]
  def change
    add_column :category2s, :category2_name, :string
  end
end
