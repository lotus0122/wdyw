# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Admin.create!(
    [
        {
            password: '111111',
            email: 'nnn@nnn'
        }

    ]
)

Content.create!(
    content_name: '食事',
    content_text: 'Meal',
    category1_id: '1',
    category2_id: '1',
    category3_id: '1',
    category4_id: '1',
    category5_id: '1',
    category6_id: '1'
)

Category1.create!(
    category1_name: '食事'
)

Category2.create!(
    category2_name: 'NoContent'
)

Category3.create!(
    category3_name: 'NoContent'
)

Category4.create!(
    category4_name: 'NoContent'
)

Category5.create!(
    category5_name: 'NoContent'
)

Category6.create!(
    category6_name: 'NoContent'
)
