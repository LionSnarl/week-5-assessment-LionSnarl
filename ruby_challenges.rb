# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN :]
# --------------------1) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data about each bike object.

class Bike
  attr_accessor :model, :wheels, :frame_size, :bell, :speed
  def initialize
  @model = 'Trek'
  @wheels = 2
  @frame_size = '168cm'
  @bell = 'Ding Ding!'
  @speed = 0
  end

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'
def get_info
  puts "The #{model} bike has #{wheels} wheels and a #{frame_size} frame."
  end
def ring_bell
  puts "#{bell}"
  end
def speedometer
  puts "#{speed}"
  end
def pedal_faster increase_by
  @speed = @speed + increase_by
  end
def brake decrease_by
  if(@speed == 0)
    @speed
  else(@speed = @speed - decrease_by)
  end
  end
end

bat_bike = Bike.new
bat_bike.get_info
#The Trek bike has 2 wheels and a 168cm frame.
bat_bike.ring_bell
#Ding Ding!
bat_bike.speedometer
#0
bat_bike.pedal_faster 10
bat_bike.speedometer
#10
bat_bike.brake 10
bat_bike.speedometer
#0
bat_bike.brake 10
bat_bike.speedometer
#0
# -------------------2) Add a bell to the bike class and create the ability to ring the bell when the method is called.

#def ring_bell
#    puts "#{bell}"
#  end
#
# bike1.ring_bell

# Expected output example: my_bike.ring_bell => 'Ding ding!'


# -------------------3) Add a speedometer to the Bike class. The speed should be initialized at 0.


# def speedometer
#   puts "#{speed}"
#   end


# Expected output example: my_bike.speed => 0


# -------------------4) Add the ability to pedal faster. The pedal_faster method should increase the speed by a particular amount.


# def pedal_faster increase_by
#   @speed = @speed + increase_by
#   end


# Expected output example: my_bike.pedal_faster 10 => 10


# -------------------5) Add the ability to brake. The brake method should decrease the speed by a particular amount. The bike cannot go negative speeds.


# def brake decrease_by
#   if(@speed == 0)
#     @speed
#   else(@speed = @speed - decrease_by)
#   end
# end


# Expected output example: my_bike.brake 15 => 0
## anything zero or less
