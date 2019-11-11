class AddNameToMainCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :main_categories, :main_category_name, :string
  end
end
