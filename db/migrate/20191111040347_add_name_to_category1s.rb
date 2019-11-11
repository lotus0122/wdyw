class AddNameToCategory1s < ActiveRecord::Migration[5.2]
  def change
    add_column :category1s, :category1_name, :string
  end
end
