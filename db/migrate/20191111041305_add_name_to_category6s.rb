class AddNameToCategory6s < ActiveRecord::Migration[5.2]
  def change
    add_column :category6s, :category6_name, :string
  end
end
