class CreateJournals < ActiveRecord::Migration[6.0]
  def change
    create_table :journals do |t|
      t.references :user
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end