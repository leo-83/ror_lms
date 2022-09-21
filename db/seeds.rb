
User.delete_all
Course.delete_all

5.times do
  User.create(
    first_name: Faker::FunnyName.name,
    last_name: Faker::FunnyName.name,
    img: Faker::Avatar.image
  )

  Course.create(
    title: Faker::Computer.os,
    desc: Faker::Lorem.sentence,
    ctype: Faker::Science.science, 
  )

end

puts "Users Number #{User.all.count}"

User.all.each do |u| 
  puts "#{u.first_name} #{u.last_name}" 
end

puts "Courses Number #{Course.all.count}"

Course.all.each do |c| 
  puts "#{c.title}" 
  puts "#{c.desc}" 
  puts "#{c.ctype}" 
  puts "--------" 
end