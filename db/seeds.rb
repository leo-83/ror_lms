
User.delete_all

5.times do
  User.create(
    first_name: Faker::FunnyName.name,
    last_name: Faker::FunnyName.name,
    img: Faker::Avatar.image
  )
end

puts "Users Number #{User.all.count}"

User.all.each do |u| 
  puts "#{u.first_name} #{u.last_name}" 
end