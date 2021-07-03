# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_03_175915) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dojos", force: :cascade do |t|
    t.string "name"
    t.text "motto"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "senseis", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.text "wise_quote"
    t.bigint "dojo_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dojo_id"], name: "index_senseis_on_dojo_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "special_attack"
    t.bigint "sensei_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["sensei_id"], name: "index_students_on_sensei_id"
  end

  add_foreign_key "senseis", "dojos"
  add_foreign_key "students", "senseis"
end
