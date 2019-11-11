class AddNameToCategory7s < ActiveRecord::Migration[5.2]
  def change
    add_column :category7s, :category7_name, :string
  end
end
