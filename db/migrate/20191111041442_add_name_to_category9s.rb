class AddNameToCategory9s < ActiveRecord::Migration[5.2]
  def change
    add_column :category9s, :category9_name, :string
  end
end
