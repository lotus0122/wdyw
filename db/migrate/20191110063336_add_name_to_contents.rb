class AddNameToContents < ActiveRecord::Migration[5.2]
  def change
    add_column :contents, :main_category_id, :integer
    add_column :contents, :content_name, :string
    add_column :contents, :content_text, :string
    add_column :contents, :content_image, :string
    add_column :contents, :category1_id, :integer
    add_column :contents, :category2_id, :integer
    add_column :contents, :category3_id, :integer
    add_column :contents, :category4_id, :integer
    add_column :contents, :category5_id, :integer
    add_column :contents, :category6_id, :integer
    add_column :contents, :category7_id, :integer
    add_column :contents, :category8_id, :integer
    add_column :contents, :category9_id, :integer
    add_column :contents, :category10_id, :integer
  end
end
