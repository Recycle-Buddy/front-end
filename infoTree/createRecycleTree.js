// import whereDoesItGo from './whereDoesItGo';
// import nodeList from './nodeList';
//this list only contains the leaves of the tree structure
//TODO: find array that includes the category titles "Air Conditioners & Heat Pumps" and integrate them into the tree structure
var whereDoesItGo = [
{label:"AC Unit",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/AirConditionersHeatPumps/index.htm',hasChild:false},
{label:"Heat Pumps",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/AirConditionersHeatPumps/index.htm',hasChild:false},
{label:"Heating Apparatus",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/AirConditionersHeatPumps/index.htm',hasChild:false},
{label:"Air Conditioning Units",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/AirConditionersHeatPumps/index.htm',hasChild:false},
{label:"Dish Washers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/OtherLargeAppliances/index.htm',hasChild:false},
{label:"Dishwashers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/OtherLargeAppliances/index.htm',hasChild:false},
{label:"Chest Freezer",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/RefrigeratorsFreezers/index.htm',hasChild:false},
{label:"Fridges",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/RefrigeratorsFreezers/index.htm',hasChild:false},
{label:"Freezers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/RefrigeratorsFreezers/index.htm',hasChild:false},
{label:"Electric Stoves",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/Stoves/index.htm',hasChild:false},
{label:"Gas Stoves",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/Stoves/index.htm',hasChild:false},
{label:"Electric Ranges",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/Stoves/index.htm',hasChild:false},
{label:"Gas Ranges",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/Stoves/index.htm',hasChild:false},
{label:"Washing MacHines",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/WashersDryers/index.htm',hasChild:false},
{label:"Tumble Dryers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/WashersDryers/index.htm',hasChild:false},
{label:"Electric Dryers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/WashersDryers/index.htm',hasChild:false},
{label:"Gas Dryers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/WashersDryers/index.htm',hasChild:false},
{label:"Dryers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/WashersDryers/index.htm',hasChild:false},
{label:"Electric Water Heaters",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/WaterHeaters/index.htm',hasChild:false},
{label:"Gas Water Heaters",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/WaterHeaters/index.htm',hasChild:false},
{label:"Disposable Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"AA Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"Batteries - Household",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"AAA Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"D Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"C Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"9 Volt Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"12 Volt Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"9-Volt Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"12-Volt Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"Household Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"Single Use Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm',hasChild:false},
{label:"Button Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/CameraWatchBatteries/index.htm',hasChild:false},
{label:"Button Cell Batteries ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/CameraWatchBatteries/index.htm',hasChild:false},
{label:"Watch Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/CameraWatchBatteries/index.htm',hasChild:false},
{label:"Laptop Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/ComputerBatteries/index.htm',hasChild:false},
{label:"Mobile Phone Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/CellPhoneBatteries/index.htm',hasChild:false},
{label:"Lithium Ion Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/LithiumBatteries/index.htm',hasChild:false},
{label:"Lithium-Metal Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/LithiumBatteries/index.htm',hasChild:false},
{label:"Lib",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/LithiumBatteries/index.htm',hasChild:false},
{label:"Li-Ion Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/LithiumBatteries/index.htm',hasChild:false},
{label:"Rechargeable Lithium Ion Battery",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/RechargeableBatteries/index.htm',hasChild:false},
{label:"Lead Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/CarLead-AcidBatteries/index.htm',hasChild:false},
{label:"Lead-Acid Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/CarLead-AcidBatteries/index.htm',hasChild:false},
{label:"Lead Acid Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/CarLead-AcidBatteries/index.htm',hasChild:false},
{label:"Adult Diapers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/DisposableDiapers/index.htm',hasChild:false},
{label:"Baby Diapers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/DisposableDiapers/index.htm',hasChild:false},
{label:"Diapers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/DisposableDiapers/index.htm',hasChild:false},
{label:"Huggies",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/DisposableDiapers/index.htm',hasChild:false},
{label:"Nappies",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/DisposableDiapers/index.htm',hasChild:false},
{label:"Pull Ups",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/DisposableDiapers/index.htm',hasChild:false},
{label:"Baby Wipes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/FlushableWipes/index.htm',hasChild:false},
{label:"Disposable Wipes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/FlushableWipes/index.htm',hasChild:false},
{label:"Wipes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/FlushableWipes/index.htm',hasChild:false},
{label:"Biodegradable Wipes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/FlushableWipes/index.htm',hasChild:false},
{label:"Porcelain Toilets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/PorcelainItems/index.htm',hasChild:false},
{label:"Bath Tubs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/PorcelainItems/index.htm',hasChild:false},
{label:"Sinks - Porcelain",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/PorcelainItems/index.htm',hasChild:false},
{label:"Toilets - Porcelain",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/PorcelainItems/index.htm',hasChild:false},
{label:"Tubs - Porcelain",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/PorcelainItems/index.htm',hasChild:false},
{label:"Tubs - Metal",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/SinkTubsFixtures-Metal/index.htm',hasChild:false},
{label:"Sinks - Metal",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/SinkTubsFixtures-Metal/index.htm',hasChild:false},
{label:"Fixtures - Metal",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/SinkTubsFixtures-Metal/index.htm',hasChild:false},
{label:"Fitted Sheets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/BeddingLinens/index.htm',hasChild:false},
{label:"Duvet Cover",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/BeddingLinens/index.htm',hasChild:false},
{label:"Linens",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/BeddingLinens/index.htm',hasChild:false},
{label:"Pillow Cases",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/BeddingLinens/index.htm',hasChild:false},
{label:"Sheets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/BeddingLinens/index.htm',hasChild:false},
{label:"Clothes Hangers - Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/PlasticClothesHangers/index.htm',hasChild:false},
{label:"Clothes Hangers - Wire",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesHangersWire/index.htm',hasChild:false},
{label:"Wire Hangers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesHangersWire/index.htm',hasChild:false},
{label:"Clothes Hangers - Wood",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesHangersWood/index.htm',hasChild:false},
{label:"Sweaters",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm',hasChild:false},
{label:"Sweatshirts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm',hasChild:false},
{label:"T Shirts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm',hasChild:false},
{label:"Clothing",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm',hasChild:false},
{label:"Jackets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm',hasChild:false},
{label:"Shoes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm',hasChild:false},
{label:"Pants",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm',hasChild:false},
{label:"Polo Shirts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm',hasChild:false},
{label:"Shirts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm',hasChild:false},
{label:"Used Clothing",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm',hasChild:false},
{label:"Coats",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm',hasChild:false},
{label:"T-Shirts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm',hasChild:false},
{label:"Beds",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/MatressesFutons/index.htm',hasChild:false},
{label:"Box Springs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/MatressesFutons/index.htm',hasChild:false},
{label:"Bunk Beds",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/MatressesFutons/index.htm',hasChild:false},
{label:"Memory Foam",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/MatressesFutons/index.htm',hasChild:false},
{label:"Futons",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/MatressesFutons/index.htm',hasChild:false},
{label:"Bikes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/BicyclesBikeParts/index.htm',hasChild:false},
{label:"Bike Chains",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/BicyclesBikeParts/index.htm',hasChild:false},
{label:"Bike Parts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/BicyclesBikeParts/index.htm',hasChild:false},
{label:"Bike Tires",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/BicyclesBikeParts/index.htm',hasChild:false},
{label:"Bike Wheels",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/BicyclesBikeParts/index.htm',hasChild:false},
{label:"Handlebars",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/BicyclesBikeParts/index.htm',hasChild:false},
{label:"Booster Seats",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ChildCarSeats/index.htm',hasChild:false},
{label:"Baby Seats",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ChildCarSeats/index.htm',hasChild:false},
{label:"Car Seats",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ChildCarSeats/index.htm',hasChild:false},
{label:"Child Booster Seats",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ChildCarSeats/index.htm',hasChild:false},
{label:"Child Safety Seats ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ChildCarSeats/index.htm',hasChild:false},
{label:"Safety Seats",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ChildCarSeats/index.htm',hasChild:false},
{label:"Rubber Hoses",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/GardenHoses/index.htm',hasChild:false},
{label:"Garden Hoses",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/GardenHoses/index.htm',hasChild:false},
{label:"Hoses",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/GardenHoses/index.htm',hasChild:false},
{label:"Gas Lawn Mowers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/LawnMowersPowerEquipment/index.htm',hasChild:false},
{label:"Gas Mowers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/LawnMowersPowerEquipment/index.htm',hasChild:false},
{label:"Mowers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/LawnMowersPowerEquipment/index.htm',hasChild:false},
{label:"Hover Mowers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/LawnMowersPowerEquipment/index.htm',hasChild:false},
{label:"Rotary Lawn Mowers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/LawnMowersPowerEquipment/index.htm',hasChild:false},
{label:"Power Equipment",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/LawnMowersPowerEquipment/index.htm',hasChild:false},
{label:"Electric Mowers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/LawnMowersPowerEquipment/index.htm',hasChild:false},
{label:"Electric Lawn Mowers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/LawnMowersPowerEquipment/index.htm',hasChild:false},
{label:"Push Mowers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/LawnMowersPowerEquipment/index.htm',hasChild:false},
{label:"Paint - Latex",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/Paint-Latex/index.htm',hasChild:false},
{label:"Paint - Oil Based",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/Oil-BasedPaint/index.htm',hasChild:false},
{label:"Paint - Oil-Based",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/Oil-BasedPaint/index.htm',hasChild:false},
{label:"Oil Paints",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/Oil-BasedPaint/index.htm',hasChild:false},
{label:"Shrubs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlantTreeSalvage/index.htm',hasChild:false},
{label:"4 Inch Pots",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlantPots/index.htm',hasChild:false},
{label:"5 Gallon Plant Pot",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlantPots/index.htm',hasChild:false},
{label:"Nursery Pots",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlantPots/index.htm',hasChild:false},
{label:"Plant Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlantPots/index.htm',hasChild:false},
{label:"Plastic Pots",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlantPots/index.htm',hasChild:false},
{label:"Kids Plastic Pool",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlasticOutdoorFurniture/index.htm',hasChild:false},
{label:"Kids Pool ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlasticOutdoorFurniture/index.htm',hasChild:false},
{label:"Patio Furniture",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlasticOutdoorFurniture/index.htm',hasChild:false},
{label:"Chairs - Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlasticOutdoorFurniture/index.htm',hasChild:false},
{label:"Furniture - Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlasticOutdoorFurniture/index.htm',hasChild:false},
{label:"Laundry Baskets - Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlasticOutdoorFurniture/index.htm',hasChild:false},
{label:"Totes - Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlasticOutdoorFurniture/index.htm',hasChild:false},
{label:"Rigid Plastics",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlasticOutdoorFurniture/index.htm',hasChild:false},
{label:"Balls",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ToysSportingGoods/index.htm',hasChild:false},
{label:"Bats",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ToysSportingGoods/index.htm',hasChild:false},
{label:"Nets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ToysSportingGoods/index.htm',hasChild:false},
{label:"Sporting Goods",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ToysSportingGoods/index.htm',hasChild:false},
{label:"Rackets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ToysSportingGoods/index.htm',hasChild:false},
{label:"Paddles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ToysSportingGoods/index.htm',hasChild:false},
{label:"Sports Equipment",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ToysSportingGoods/index.htm',hasChild:false},
{label:"Cookie Sheets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/BakingTraysCookieSheets/index.htm',hasChild:false},
{label:"Baking Sheets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/BakingTraysCookieSheets/index.htm',hasChild:false},
{label:"Cookie Trays",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/BakingTraysCookieSheets/index.htm',hasChild:false},
{label:"Trays",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/BakingTraysCookieSheets/index.htm',hasChild:false},
{label:"Cake Pans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/BakingTraysCookieSheets/index.htm',hasChild:false},
{label:"Cake Tins",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/BakingTraysCookieSheets/index.htm',hasChild:false},
{label:"Tins",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/CookieTins/index.htm',hasChild:false},
{label:"Cookie Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/CookieTins/index.htm',hasChild:false},
{label:"Bowls",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/MugsPlatesBowls/index.htm',hasChild:false},
{label:"Coffee Mugs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/MugsPlatesBowls/index.htm',hasChild:false},
{label:"Dinner Plates",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/MugsPlatesBowls/index.htm',hasChild:false},
{label:"Plates",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/MugsPlatesBowls/index.htm',hasChild:false},
{label:"Cloth Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/ReusableShoppingBags/index.htm',hasChild:false},
{label:"Bags - Cloth",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/ReusableShoppingBags/index.htm',hasChild:false},
{label:"Shopping Bags - Cloth",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/ReusableShoppingBags/index.htm',hasChild:false},
{label:"Cloth Shopping Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/ReusableShoppingBags/index.htm',hasChild:false},
{label:"Christmas Lights",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/HolidayLights/index.htm',hasChild:false},
{label:"Holiday Lights ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/HolidayLights/index.htm',hasChild:false},
{label:"Party Lights",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/HolidayLights/index.htm',hasChild:false},
{label:"Xmas Lights",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/HolidayLights/index.htm',hasChild:false},
{label:"Light Bulbs - Fluorescent",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsFluorescent/index.htm',hasChild:false},
{label:"Ceiling Lights",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsFluorescent/index.htm',hasChild:false},
{label:"Fluorescent Tubes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsFluorescent/index.htm',hasChild:false},
{label:"Electric Bulbs - Fluorescent",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsFluorescent/index.htm',hasChild:false},
{label:"Electric Tubes - Fluorescent",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsFluorescent/index.htm',hasChild:false},
{label:"Light Bulbs - Halogen ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsHalogenXenon/index.htm',hasChild:false},
{label:"Light Bulbs - Xenon",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsHalogenXenon/index.htm',hasChild:false},
{label:"Xenon Light Bulbs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsHalogenXenon/index.htm',hasChild:false},
{label:"Halogen Light Bulbs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsHalogenXenon/index.htm',hasChild:false},
{label:"Light Bulbs - Incandescent ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsIncandescent/index.htm',hasChild:false},
{label:"Light Bulbs - LED ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsLED/index.htm',hasChild:false},
{label:"Ashes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/Ashes/index.htm',hasChild:false},
{label:"Charcoal",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/Ashes/index.htm',hasChild:false},
{label:"Burned Charcoal",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/Ashes/index.htm',hasChild:false},
{label:"Briquette Ashes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/Ashes/index.htm',hasChild:false},
{label:"Fireplace Ashes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/Ashes/index.htm',hasChild:false},
{label:"Padding",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/CarpetPadding/index.htm',hasChild:false},
{label:"Rugs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/CarpetPadding/index.htm',hasChild:false},
{label:"Cold Packs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/GelPacks/index.htm',hasChild:false},
{label:"Hot Packs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/GelPacks/index.htm',hasChild:false},
{label:"Ice Packs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/GelPacks/index.htm',hasChild:false},
{label:"Chairs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Coffee Tables",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Couches",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Dining Room Tables",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Furniture",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Lazy Boy",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Love Seats",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Ottomans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Recliners",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Sectional Couches",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Side Table",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Shoe Racks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Sofas",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Tables",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm',hasChild:false},
{label:"Filing Cabinets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/OfficeFurnitureEquipment/index.htm',hasChild:false},
{label:"Office Equipment",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/OfficeFurnitureEquipment/index.htm',hasChild:false},
{label:"Office Chairs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/OfficeFurnitureEquipment/index.htm',hasChild:false},
{label:"Rolling Chairs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/OfficeFurnitureEquipment/index.htm',hasChild:false},
{label:"Desks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/OfficeFurnitureEquipment/index.htm',hasChild:false},
{label:"Shelf",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/OfficeFurnitureEquipment/index.htm',hasChild:false},
{label:"Shelves",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/OfficeFurnitureEquipment/index.htm',hasChild:false},
{label:"Dog Food",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetFood/index.htm',hasChild:false},
{label:"Canned Cat Food",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetFood/index.htm',hasChild:false},
{label:"Canned Dog Food",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetFood/index.htm',hasChild:false},
{label:"Wet Cat Food",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetFood/index.htm',hasChild:false},
{label:"Cat Litter",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetWasteLitter/index.htm',hasChild:false},
{label:"Cat Poop",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetWasteLitter/index.htm',hasChild:false},
{label:"Cat Waste",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetWasteLitter/index.htm',hasChild:false},
{label:"Dog Poop",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetWasteLitter/index.htm',hasChild:false},
{label:"Dog Waste",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetWasteLitter/index.htm',hasChild:false},
{label:"Kitty Litter",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetWasteLitter/index.htm',hasChild:false},
{label:"Poop",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetWasteLitter/index.htm',hasChild:false},
{label:"Printer Ink",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PrinterCartridgesToner/index.htm',hasChild:false},
{label:"Epson Printer Ink",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PrinterCartridgesToner/index.htm',hasChild:false},
{label:"HP Printer Ink",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PrinterCartridgesToner/index.htm',hasChild:false},
{label:"Brother Printer Ink",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PrinterCartridgesToner/index.htm',hasChild:false},
{label:"Dell Printer Ink",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PrinterCartridgesToner/index.htm',hasChild:false},
{label:"Toner Cartridges",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PrinterCartridgesToner/index.htm',hasChild:false},
{label:"Fire Alarms",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/SmokeDetectors/index.htm',hasChild:false},
{label:"Smoke Alarms",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/SmokeDetectors/index.htm',hasChild:false},
{label:"Telephones - Landline",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/TelephonesLandline/index.htm',hasChild:false},
{label:"Handsets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/TelephonesLandline/index.htm',hasChild:false},
{label:"Blinds",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/WindowBlinds/index.htm',hasChild:false},
{label:"Shades",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/WindowBlinds/index.htm',hasChild:false},
{label:"Window Shades",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/WindowBlinds/index.htm',hasChild:false},
{label:"Photo Glass",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/WindownPictureGlass/index.htm',hasChild:false},
{label:"Picture Frame Glass",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/WindownPictureGlass/index.htm',hasChild:false},
{label:"Plate Glass",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/WindownPictureGlass/index.htm',hasChild:false},
{label:"Construction Debris",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/Exterior/MixedCD/index.htm',hasChild:false},
{label:"Construction Garbage",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/Exterior/MixedCD/index.htm',hasChild:false},
{label:"Construction Waste",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/Exterior/MixedCD/index.htm',hasChild:false},
{label:"Construction and Demolition Waste",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/Exterior/MixedCD/index.htm',hasChild:false},
{label:"Mixed Construction Waste",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/Exterior/MixedCD/index.htm',hasChild:false},
{label:"Ceiling Materials",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/AcousticCeilingTile/index.htm',hasChild:false},
{label:"Ceiling Panels",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/AcousticCeilingTile/index.htm',hasChild:false},
{label:"Ceiling Squares",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/AcousticCeilingTile/index.htm',hasChild:false},
{label:"Ceiling Tiles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/AcousticCeilingTile/index.htm',hasChild:false},
{label:"Soundproofing",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/AcousticCeilingTile/index.htm',hasChild:false},
{label:"Asphalt Shingles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/AsphaltRoofing/index.htm',hasChild:false},
{label:"Roofing Materials",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/AsphaltRoofing/index.htm',hasChild:false},
{label:"Shingles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/AsphaltRoofing/index.htm',hasChild:false},
{label:"Tab Shingle",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/AsphaltRoofing/index.htm',hasChild:false},
{label:"Tear Off Asphalt Shingles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/AsphaltRoofing/index.htm',hasChild:false},
{label:"Air Duct",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FurnacesFixtures/Ducts/index.htm',hasChild:false},
{label:"Duct Work",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FurnacesFixtures/Ducts/index.htm',hasChild:false},
{label:"Heating Duct",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FurnacesFixtures/Ducts/index.htm',hasChild:false},
{label:"Fiber Glass",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FurnacesFixtures/Fiberglass/index.htm',hasChild:false},
{label:"Filigree Glass",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FurnacesFixtures/Fiberglass/index.htm',hasChild:false},
{label:"Glass Thread",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FurnacesFixtures/Fiberglass/index.htm',hasChild:false},
{label:"Furnace Parts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FurnacesFixtures/Furnaces/index.htm',hasChild:false},
{label:"Salvagable Materials",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SalvagedMaterials/index.htm',hasChild:false},
{label:"Asphalt Chunks ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/ConcreteAsphalt/index.htm',hasChild:false},
{label:"Torn Up Asphalt",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/ConcreteAsphalt/index.htm',hasChild:false},
{label:"Pavement",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/ConcreteAsphalt/index.htm',hasChild:false},
{label:"Cement",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/ConcreteAsphalt/index.htm',hasChild:false},
{label:"Torn Up Concrete",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/ConcreteAsphalt/index.htm',hasChild:false},
{label:"Planting Soil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/DirtSoil/index.htm',hasChild:false},
{label:"Potting Soil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/DirtSoil/index.htm',hasChild:false},
{label:"Soil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/DirtSoil/index.htm',hasChild:false},
{label:"Garden Soil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/DirtSoil/index.htm',hasChild:false},
{label:"Dirt - Contaminated",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/ContaminatedSoil/index.htm',hasChild:false},
{label:"Soil - Contaminated",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/ContaminatedSoil/index.htm',hasChild:false},
{label:"Contaminated Soil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/ContaminatedSoil/index.htm',hasChild:false},
{label:"Crushed Gravel",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/RockGravel/index.htm',hasChild:false},
{label:"Gravel",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/RockGravel/index.htm',hasChild:false},
{label:"Pea Gravel",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/RockGravel/index.htm',hasChild:false},
{label:"Torn Out Walling",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/Drywall/index.htm',hasChild:false},
{label:"Wall Boards",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/Drywall/index.htm',hasChild:false},
{label:"Wall Debris",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/Drywall/index.htm',hasChild:false},
{label:"Broken Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/BrokenGlass/index.htm',hasChild:false},
{label:"Broken Glasses",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/BrokenGlass/index.htm',hasChild:false},
{label:"Broken Jars",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/BrokenGlass/index.htm',hasChild:false},
{label:"Glass - Broken",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/BrokenGlass/index.htm',hasChild:false},
{label:"Pieces of Broken Glass",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/BrokenGlass/index.htm',hasChild:false},
{label:"Boards",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/LumberBoards/index.htm',hasChild:false},
{label:"Dimensional Lumber",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/LumberBoards/index.htm',hasChild:false},
{label:"Cut Lumber",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/LumberBoards/index.htm',hasChild:false},
{label:"Lumber Ends",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/LumberBoards/index.htm',hasChild:false},
{label:"Two by Fours",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/LumberBoards/index.htm',hasChild:false},
{label:"2 X 4s",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/LumberBoards/index.htm',hasChild:false},
{label:"Paneling",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/PanelingCompositeWoods/index.htm',hasChild:false},
{label:"Particle Board",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/PanelingCompositeWoods/index.htm',hasChild:false},
{label:"Wood Paneling",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/PanelingCompositeWoods/index.htm',hasChild:false},
{label:"Wood Panels",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/PanelingCompositeWoods/index.htm',hasChild:false},
{label:"Twigs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/TreesBrush/index.htm',hasChild:false},
{label:"Sticks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/TreesBrush/index.htm',hasChild:false},
{label:"Branches",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/TreesBrush/index.htm',hasChild:false},
{label:"Brush",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/TreesBrush/index.htm',hasChild:false},
{label:"Bushes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/TreesBrush/index.htm',hasChild:false},
{label:"Logs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/TreesBrush/index.htm',hasChild:false},
{label:"Tree Clippings",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/TreesBrush/index.htm',hasChild:false},
{label:"Tree Branches",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/TreesBrush/index.htm',hasChild:false},
{label:"Wood Waste - Clean",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWasteClean/index.htm',hasChild:false},
{label:"Wood - Clean",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWasteClean/index.htm',hasChild:false},
{label:"Scrap Wood",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWasteClean/index.htm',hasChild:false},
{label:"Wood Waste",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWasteClean/index.htm',hasChild:false},
{label:"Painted Boards",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWastePaintedTreated/index.htm',hasChild:false},
{label:"Treated Boards",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWastePaintedTreated/index.htm',hasChild:false},
{label:"Sealed Wood",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWastePaintedTreated/index.htm',hasChild:false},
{label:"Varnished Wood",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWastePaintedTreated/index.htm',hasChild:false},
{label:"Treated Lumber",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWastePaintedTreated/index.htm',hasChild:false},
{label:"Painted Wood",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWastePaintedTreated/index.htm',hasChild:false},
{label:"Boards With Nails",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWastePaintedTreated/index.htm',hasChild:false},
{label:"Treated Wood",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWastePaintedTreated/index.htm',hasChild:false},
{label:"DVDs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/CDsDVDsFloppies/index.htm',hasChild:false},
{label:"Compact Discs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/CDsDVDsFloppies/index.htm',hasChild:false},
{label:"Floppies",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/CDsDVDsFloppies/index.htm',hasChild:false},
{label:"Floppy Disks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/CDsDVDsFloppies/index.htm',hasChild:false},
{label:"Hard Disks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/CDsDVDsFloppies/index.htm',hasChild:false},
{label:"Smart Phones",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/CellPhones/index.htm',hasChild:false},
{label:"Alarm Clocks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/ClockRadios/index.htm',hasChild:false},
{label:"Tablet Computer",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/ComputersLaptops/index.htm',hasChild:false},
{label:"Laptops",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/ComputersLaptops/index.htm',hasChild:false},
{label:"iPads",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/ComputersLaptops/index.htm',hasChild:false},
{label:"Tablets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/ComputersLaptops/index.htm',hasChild:false},
{label:"Monitors",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/ComputerMonitors/index.htm',hasChild:false},
{label:"Computer Screens",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/ComputerMonitors/index.htm',hasChild:false},
{label:"Used Computer Monitors",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/ComputerMonitors/index.htm',hasChild:false},
{label:"Fax Machines",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/CopiersFaxMachines/index.htm',hasChild:false},
{label:"Copy Machines",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/CopiersFaxMachines/index.htm',hasChild:false},
{label:"Xerox Machines",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/CopiersFaxMachines/index.htm',hasChild:false},
{label:"Kindles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-readers/index.htm',hasChild:false},
{label:"CD Players",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-waste/index.htm',hasChild:false},
{label:"DVD Players",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-waste/index.htm',hasChild:false},
{label:"CPUs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-waste/index.htm',hasChild:false},
{label:"Electronic Waste",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-waste/index.htm',hasChild:false},
{label:"iPhones",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-waste/index.htm',hasChild:false},
{label:"Mobile Phones",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-waste/index.htm',hasChild:false},
{label:"Old Computers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-waste/index.htm',hasChild:false},
{label:"Old PCs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-waste/index.htm',hasChild:false},
{label:"PCs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-waste/index.htm',hasChild:false},
{label:"Record Player",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-waste/index.htm',hasChild:false},
{label:"Sound Systems",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/StereoAudioEquipment/index.htm',hasChild:false},
{label:"Boom Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/StereoAudioEquipment/index.htm',hasChild:false},
{label:"Radio Receivers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/StereoAudioEquipment/index.htm',hasChild:false},
{label:"Radio Tuners",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/StereoAudioEquipment/index.htm',hasChild:false},
{label:"Radios",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/StereoAudioEquipment/index.htm',hasChild:false},
{label:"Speakers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/StereoAudioEquipment/index.htm',hasChild:false},
{label:"Stereos",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/StereoAudioEquipment/index.htm',hasChild:false},
{label:"Tape Decks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/StereoAudioEquipment/index.htm',hasChild:false},
{label:"Tape Players",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/StereoAudioEquipment/index.htm',hasChild:false},
{label:"T.V.",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/Televisions/index.htm',hasChild:false},
{label:"TVs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/Televisions/index.htm',hasChild:false},
{label:"Video Players",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/VCRs/index.htm',hasChild:false},
{label:"Cloth",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Fabric/FabricTextiles/index.htm',hasChild:false},
{label:"Curtains",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Fabric/FabricTextiles/index.htm',hasChild:false},
{label:"Textiles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Fabric/FabricTextiles/index.htm',hasChild:false},
{label:"Used Cooking Oil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/CookingOil/index.htm',hasChild:false},
{label:"Vegetable Oil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/CookingOil/index.htm',hasChild:false},
{label:"Bacon Grease",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"Coconut Oil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"Crisco",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"F.O.G.",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"Fats",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"Fog",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"Greases",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"Oils",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"Olive Oil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"Peanut Oil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"Used Peanut Oil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"Used Sunflower Oil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"Used Vegetable Oil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm',hasChild:false},
{label:"Leftovers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FoodScraps--All/index.htm',hasChild:false},
{label:"Scraps",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FoodScraps--All/index.htm',hasChild:false},
{label:"Table Scraps",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FoodScraps--All/index.htm',hasChild:false},
{label:"Leftover Food",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FoodScraps--All/index.htm',hasChild:false},
{label:"Food Waste",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FoodScraps--All/index.htm',hasChild:false},
{label:"Multivitamins",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/Vitamins/index.htm',hasChild:false},
{label:"Supplements",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/Vitamins/index.htm',hasChild:false},
{label:"Aluminum Sheets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/AluminumFoilTrays/index.htm',hasChild:false},
{label:"Aluminum Trays",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/AluminumFoilTrays/index.htm',hasChild:false},
{label:"Foil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/AluminumFoilTrays/index.htm',hasChild:false},
{label:"Tin Foil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/AluminumFoilTrays/index.htm',hasChild:false},
{label:"Biodegradable Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/CompostableBags/index.htm',hasChild:false},
{label:"Potato Chip Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Bags/ChipBags/index.htm',hasChild:false},
{label:"Tortilla Chip Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Bags/ChipBags/index.htm',hasChild:false},
{label:"Box Liners",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/FoodBoxLiners/index.htm',hasChild:false},
{label:"Food Box Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/FoodBoxLiners/index.htm',hasChild:false},
{label:"Plastic Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/GroceryBags/index.htm',hasChild:false},
{label:"Plastic Grocery Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/GroceryBags/index.htm',hasChild:false},
{label:"To Go Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/GroceryBags/index.htm',hasChild:false},
{label:"Popcorn Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/MicrowavePopcornBags/index.htm',hasChild:false},
{label:"Plastics",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/PlasticNoRecycleSymbol/index.htm',hasChild:false},
{label:"Cat Food Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/PetFoodBags/index.htm',hasChild:false},
{label:"Dog Food Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/PetFoodBags/index.htm',hasChild:false},
{label:"Kibble Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/PetFoodBags/index.htm',hasChild:false},
{label:"Animal Food Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/PetFoodBags/index.htm',hasChild:false},
{label:"Plastic Produce Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ProduceBulkFoodBags/index.htm',hasChild:false},
{label:"Plastic Food Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ProduceBulkFoodBags/index.htm',hasChild:false},
{label:"Vegetable Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ProduceBulkFoodBags/index.htm',hasChild:false},
{label:"Produce Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ProduceBulkFoodBags/index.htm',hasChild:false},
{label:"Veggie Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ProduceBulkFoodBags/index.htm',hasChild:false},
{label:"Grocery Bags - Produce",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ProduceBulkFoodBags/index.htm',hasChild:false},
{label:"Bulk Food Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ProduceBulkFoodBags/index.htm',hasChild:false},
{label:"Food Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ZiplocBags/index.htm',hasChild:false},
{label:"Food Storage Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ZiplocBags/index.htm',hasChild:false},
{label:"Freezer Storage Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ZiplocBags/index.htm',hasChild:false},
{label:"Freezer Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ZiplocBags/index.htm',hasChild:false},
{label:"Caps",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/BottleCapsJarLids/index.htm',hasChild:false},
{label:"Lids",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/BottleCapsJarLids/index.htm',hasChild:false},
{label:"1 Gallon Jugs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticBottlesWaterSoda/index.htm',hasChild:false},
{label:"Bottles - Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticBottlesWaterSoda/index.htm',hasChild:false},
{label:"Jugs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticBottlesWaterSoda/index.htm',hasChild:false},
{label:"Pop Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticBottlesWaterSoda/index.htm',hasChild:false},
{label:"Screw Top Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticBottlesWaterSoda/index.htm',hasChild:false},
{label:"Soda Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticBottlesWaterSoda/index.htm',hasChild:false},
{label:"Water Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticBottlesWaterSoda/index.htm',hasChild:false},
{label:"Plastic Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticBottlesWaterSoda/index.htm',hasChild:false},
{label:"One-Gallon Jugs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticBottlesWaterSoda/index.htm',hasChild:false},
{label:"Milk Jugs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticMilkJuiceJug/index.htm',hasChild:false},
{label:"Juice Jugs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticMilkJuiceJug/index.htm',hasChild:false},
{label:"Jugs of Juice",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticMilkJuiceJug/index.htm',hasChild:false},
{label:"Jugs of Milk",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticMilkJuiceJug/index.htm',hasChild:false},
{label:"Milk Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticMilkJuiceJug/index.htm',hasChild:false},
{label:"Juice Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticMilkJuiceJug/index.htm',hasChild:false},
{label:"Carton With Plastic Spout",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/AsepticTetraPak/index.htm',hasChild:false},
{label:"Carton With Plastic Top",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/AsepticTetraPak/index.htm',hasChild:false},
{label:"Tetra Pak",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/AsepticTetraPak/index.htm',hasChild:false},
{label:"Carton With Spout",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/AsepticTetraPak/index.htm',hasChild:false},
{label:"Soup Cartons",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/AsepticTetraPak/index.htm',hasChild:false},
{label:"Milk Cartons",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/AsepticTetraPak/index.htm',hasChild:false},
{label:"Juice Cartons",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/AsepticTetraPak/index.htm',hasChild:false},
{label:"Margarine Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/ButterBoxes/index.htm',hasChild:false},
{label:"Cracker Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/CerealCrackerBoxes/index.htm',hasChild:false},
{label:"Snack Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/CerealCrackerBoxes/index.htm',hasChild:false},
{label:"Egg Cartons - Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/PaperEggCartons/index.htm',hasChild:false},
{label:"Cartons - Eggs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/PaperEggCartons/index.htm',hasChild:false},
{label:"Box for Frozen Food",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/FrozenFoodBoxes/index.htm',hasChild:false},
{label:"TV Dinner Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/FrozenFoodBoxes/index.htm',hasChild:false},
{label:"Frozen Dinner Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/FrozenFoodBoxes/index.htm',hasChild:false},
{label:"Ice Cream Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/IceCreamCartons/index.htm',hasChild:false},
{label:"Ice Cream Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/IceCreamCartons/index.htm',hasChild:false},
{label:"Sippy Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/JuiceBoxes/index.htm',hasChild:false},
{label:"Juice Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/JuiceBoxes/index.htm',hasChild:false},
{label:"Mixed Metal and Cardboard",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/CardboardMetalContainers/index.htm',hasChild:false},
{label:"Mixed Metal Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/CardboardMetalContainers/index.htm',hasChild:false},
{label:"Nut Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/CardboardMetalContainers/index.htm',hasChild:false},
{label:"Nut Canisters",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/CardboardMetalContainers/index.htm',hasChild:false},
{label:"Potato Chip Canisters",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/CardboardMetalContainers/index.htm',hasChild:false},
{label:"Potato Chip Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/CardboardMetalContainers/index.htm',hasChild:false},
{label:"Coffee Canisters",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/CardboardMetalContainers/index.htm',hasChild:false},
{label:"Coffee Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/CardboardMetalContainers/index.htm',hasChild:false},
{label:"Berry Baskets - Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/PaperBerryBaskets/index.htm',hasChild:false},
{label:"Fruit Baskets - Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/PaperBerryBaskets/index.htm',hasChild:false},
{label:"Strawberry Baskets - Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/PaperBerryBaskets/index.htm',hasChild:false},
{label:"Blueberry Baskets - Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/PaperBerryBaskets/index.htm',hasChild:false},
{label:"Blackberry Baskets - Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/PaperBerryBaskets/index.htm',hasChild:false},
{label:"Raspberry Baskets - Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/PaperBerryBaskets/index.htm',hasChild:false},
{label:"Soup Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/SoupBoxes/index.htm',hasChild:false},
{label:"Food Cartons",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/Take-OutContainers/index.htm',hasChild:false},
{label:"Take Out Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/Take-OutContainers/index.htm',hasChild:false},
{label:"To Go Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/Take-OutContainers/index.htm',hasChild:false},
{label:"To Go Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/Take-OutContainers/index.htm',hasChild:false},
{label:"To-Go Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/Take-OutContainers/index.htm',hasChild:false},
{label:"To-Go Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/Take-OutContainers/index.htm',hasChild:false},
{label:"Take-Out Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/Take-OutContainers/index.htm',hasChild:false},
{label:"Filters - Coffee",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CoffeeFilters/index.htm',hasChild:false},
{label:"Used Coffee Filters",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CoffeeFilters/index.htm',hasChild:false},
{label:"Compostable Forks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CompostableFoodServiceItems/index.htm',hasChild:false},
{label:"Compostable Knifes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CompostableFoodServiceItems/index.htm',hasChild:false},
{label:"Compostable Plates",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CompostableFoodServiceItems/index.htm',hasChild:false},
{label:"Compostable Spoons",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CompostableFoodServiceItems/index.htm',hasChild:false},
{label:"Compostable Sporks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CompostableFoodServiceItems/index.htm',hasChild:false},
{label:"Compostable Trays",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CompostableFoodServiceItems/index.htm',hasChild:false},
{label:"Compostable Cups",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CompostableFoodServiceItems/index.htm',hasChild:false},
{label:"Compostable to Go Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CompostableFoodServiceItems/index.htm',hasChild:false},
{label:"Compostable Straws",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CompostableFoodServiceItems/index.htm',hasChild:false},
{label:"Wine Stoppers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Corks/index.htm',hasChild:false},
{label:"Wine Corks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Corks/index.htm',hasChild:false},
{label:"Beer Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/GlassBottlesJars/index.htm',hasChild:false},
{label:"Bottles - Glass",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/GlassBottlesJars/index.htm',hasChild:false},
{label:"Glass Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/GlassBottlesJars/index.htm',hasChild:false},
{label:"Glass Jars",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/GlassBottlesJars/index.htm',hasChild:false},
{label:"Glass Shards",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/GlassBottlesJars/index.htm',hasChild:false},
{label:"Jam Jars",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/GlassBottlesJars/index.htm',hasChild:false},
{label:"Jars - Glass",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/GlassBottlesJars/index.htm',hasChild:false},
{label:"Food Jars",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/GlassBottlesJars/index.htm',hasChild:false},
{label:"Starbucks Cups",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/HotCoffeeCups/index.htm',hasChild:false},
{label:"Coffee Cups ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/HotCoffeeCups/index.htm',hasChild:false},
{label:"To Go Coffee Cups",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/HotCoffeeCups/index.htm',hasChild:false},
{label:"Hot Drink Cups",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/HotCoffeeCups/index.htm',hasChild:false},
{label:"Soup Can Lids",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Lids/CanLids/index.htm',hasChild:false},
{label:"Coffee Cup Lids",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Lids/LidsDeliCoffeeSoftDrink/index.htm',hasChild:false},
{label:"Coffee Lids",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Lids/LidsDeliCoffeeSoftDrink/index.htm',hasChild:false},
{label:"Deli Lids",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Lids/LidsDeliCoffeeSoftDrink/index.htm',hasChild:false},
{label:"Soda Lids",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Lids/LidsDeliCoffeeSoftDrink/index.htm',hasChild:false},
{label:"Soft Drink Cup Lids",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Lids/LidsDeliCoffeeSoftDrink/index.htm',hasChild:false},
{label:"Pressurized Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/AerosolCans/index.htm',hasChild:false},
{label:"Spray Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/AerosolCans/index.htm',hasChild:false},
{label:"Cans - Aerosol",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/AerosolCans/index.htm',hasChild:false},
{label:"Spray Paint Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/AerosolCans/index.htm',hasChild:false},
{label:"Aluminum Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/BeverageCans/index.htm',hasChild:false},
{label:"Beer Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/BeverageCans/index.htm',hasChild:false},
{label:"Cans - Beverage",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/BeverageCans/index.htm',hasChild:false},
{label:"Pop Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/BeverageCans/index.htm',hasChild:false},
{label:"Soda Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/BeverageCans/index.htm',hasChild:false},
{label:"Soda Pop Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/BeverageCans/index.htm',hasChild:false},
{label:"Food Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/SteelTinCansLids/index.htm',hasChild:false},
{label:"Canned Food",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/SteelTinCansLids/index.htm',hasChild:false},
{label:"Boxes - Cardboard",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/CardboardBoxes/index.htm',hasChild:false},
{label:"Moving Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/CardboardBoxes/index.htm',hasChild:false},
{label:"Packing Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/CardboardBoxes/index.htm',hasChild:false},
{label:"Dirty Cardboard",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/CardboardSoiledorGreasy/index.htm',hasChild:false},
{label:"Greasy Cardboard",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/CardboardSoiledorGreasy/index.htm',hasChild:false},
{label:"Wet Cardboard",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/CardboardSoiledorGreasy/index.htm',hasChild:false},
{label:"Solied Cardboard",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/CardboardSoiledorGreasy/index.htm',hasChild:false},
{label:"Disposable Cups",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/PaperCupsCoffeeeCups/index.htm',hasChild:false},
{label:"Disposable Plates",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/PaperCupsCoffeeeCups/index.htm',hasChild:false},
{label:"Dixie Cups",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/PaperCupsCoffeeeCups/index.htm',hasChild:false},
{label:"Plastic Trays",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/BerryTrays/index.htm',hasChild:false},
{label:"To Go Containers - Clamshell",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/ClamshellContainers/index.htm',hasChild:false},
{label:"Egg Cartons - Foam",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/FoamEggCartons/index.htm',hasChild:false},
{label:"Food Trays",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/MeatFoodTrays/index.htm',hasChild:false},
{label:"Foam Trays",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/MeatFoodTrays/index.htm',hasChild:false},
{label:"Beer Pong Cups",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm',hasChild:false},
{label:"Cups - Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm',hasChild:false},
{label:"Plastic Forks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm',hasChild:false},
{label:"Plastic Knives",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm',hasChild:false},
{label:"Plastic Plates",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm',hasChild:false},
{label:"Plastic Serviceware",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm',hasChild:false},
{label:"Sporks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm',hasChild:false},
{label:"Plastic Spoons",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm',hasChild:false},
{label:"Plastic Sporks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm',hasChild:false},
{label:"Party Cups",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm',hasChild:false},
{label:"Red Party Cups",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm',hasChild:false},
{label:"Solo Cups",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm',hasChild:false},
{label:"Mayonnaise Jars",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PeanutButterMayonnaiseJars/index.htm',hasChild:false},
{label:"Plastic Jars",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PeanutButterMayonnaiseJars/index.htm',hasChild:false},
{label:"Peanut Butter Jars",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PeanutButterMayonnaiseJars/index.htm',hasChild:false},
{label:"Plastic Food Jars",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PeanutButterMayonnaiseJars/index.htm',hasChild:false},
{label:"Car Glass",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/AutoGlass/index.htm',hasChild:false},
{label:"Car Window Glass",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/AutoGlass/index.htm',hasChild:false},
{label:"Windshield Glass",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/AutoGlass/index.htm',hasChild:false},
{label:"Chalices",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/DrinkingGlasses/index.htm',hasChild:false},
{label:"Drink Glasses",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/DrinkingGlasses/index.htm',hasChild:false},
{label:"Tumblers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/DrinkingGlasses/index.htm',hasChild:false},
{label:"Glasses",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/EyeGlasses/index.htm',hasChild:false},
{label:"Ceramic Household Items",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/GlassCeramicHouseholdItems/index.htm',hasChild:false},
{label:"Ceramics",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/GlassCeramicHouseholdItems/index.htm',hasChild:false},
{label:"Plates - Ceramic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/GlassCeramicHouseholdItems/index.htm',hasChild:false},
{label:"Bowls - Ceramic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/GlassCeramicHouseholdItems/index.htm',hasChild:false},
{label:"Glass - Vase",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/GlassCeramicHouseholdItems/index.htm',hasChild:false},
{label:"Ammo",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Assault Rifles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Bullets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Shell Casings",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Casings",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Firearms",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Guns",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Handguns",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Munitions",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Pistols",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Revolvers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Rifles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Shells",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Shotguns",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Shotgun Shells",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Pellet Guns",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm',hasChild:false},
{label:"Acetylene Tanks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/OxygenAcetyleneTanks/index.htm',hasChild:false},
{label:"Welding Gas Tanks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/OxygenAcetyleneTanks/index.htm',hasChild:false},
{label:"Oxy Acetylene Tanks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/OxygenAcetyleneTanks/index.htm',hasChild:false},
{label:"Oxy-Acetylene Tanks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/OxygenAcetyleneTanks/index.htm',hasChild:false},
{label:"Gas Tanks - Welding",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/OxygenAcetyleneTanks/index.htm',hasChild:false},
{label:"Barbeque Tanks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/PropaneTanks/index.htm',hasChild:false},
{label:"BBQ Tanks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/PropaneTanks/index.htm',hasChild:false},
{label:"Small Gas Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/GasCanistersSmall/index.htm',hasChild:false},
{label:"Coleman Gas Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/GasCanistersSmall/index.htm',hasChild:false},
{label:"Camping Gas Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/GasCanistersSmall/index.htm',hasChild:false},
{label:"Camping Stove Gas Cans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/GasCanistersSmall/index.htm',hasChild:false},
{label:"Firecrackers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Fireworks/index.htm',hasChild:false},
{label:"Mortars",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Fireworks/index.htm',hasChild:false},
{label:"Bottle Rockets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Fireworks/index.htm',hasChild:false},
{label:"Transmission Fluid ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/BrakeTransmissionFluid/index.htm',hasChild:false},
{label:"Hydraulic Fluid",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/BrakeTransmissionFluid/index.htm',hasChild:false},
{label:"Detergents",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/CleaningSupplies/index.htm',hasChild:false},
{label:"Janitorial Supplies",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/CleaningSupplies/index.htm',hasChild:false},
{label:"Toilet Cleaner",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/CleaningSupplies/index.htm',hasChild:false},
{label:"Window Cleaner",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/CleaningSupplies/index.htm',hasChild:false},
{label:"Household Chemicals",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/CleaningSupplies/index.htm',hasChild:false},
{label:"Gas",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/Gasoline/index.htm',hasChild:false},
{label:"Adhesives",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/GluesAdhesives/index.htm',hasChild:false},
{label:"Elmers Glue",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/GluesAdhesives/index.htm',hasChild:false},
{label:"Glue Sticks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/GluesAdhesives/index.htm',hasChild:false},
{label:"Paste",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/GluesAdhesives/index.htm',hasChild:false},
{label:"Super Glue",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/GluesAdhesives/index.htm',hasChild:false},
{label:"Wood Glue",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/GluesAdhesives/index.htm',hasChild:false},
{label:"Craft Chemicals",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/HobbyChemicals/index.htm',hasChild:false},
{label:"Auto Oil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/MotorOil/index.htm',hasChild:false},
{label:"Automobile Oil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/MotorOil/index.htm',hasChild:false},
{label:"Synthetic Motor Oil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/MotorOil/index.htm',hasChild:false},
{label:"Engine Oil",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/MotorOil/index.htm',hasChild:false},
{label:"Car Oil ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/MotorOil/index.htm',hasChild:false},
{label:"Chlorine",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/PoolSpaChemicals/index.htm',hasChild:false},
{label:"Spa Chemicals",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/PoolSpaChemicals/index.htm',hasChild:false},
{label:"Bromine",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/PoolSpaChemicals/index.htm',hasChild:false},
{label:"Hazardous Chemicals",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/Solvents/index.htm',hasChild:false},
{label:"Over the Counter Medicines",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Medicine/index.htm',hasChild:false},
{label:"Prescription Medicine",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Medicine/index.htm',hasChild:false},
{label:"Prescriptions",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Medicine/index.htm',hasChild:false},
{label:"Medication",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Medicine/index.htm',hasChild:false},
{label:"Mercury",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/MercuryThermometersItems/index.htm',hasChild:false},
{label:"Heroin Needles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/NeedlesSyringes/index.htm',hasChild:false},
{label:"Insulin Needles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/NeedlesSyringes/index.htm',hasChild:false},
{label:"Needles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/NeedlesSyringes/index.htm',hasChild:false},
{label:"Sharps",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/NeedlesSyringes/index.htm',hasChild:false},
{label:"Syringes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/NeedlesSyringes/index.htm',hasChild:false},
{label:"Weed Killer",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Pesticides/index.htm',hasChild:false},
{label:"Weed and Feed",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Pesticides/index.htm',hasChild:false},
{label:"Herbicides",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Pesticides/index.htm',hasChild:false},
{label:"Fungicides",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Pesticides/index.htm',hasChild:false},
{label:"Insecticides",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Pesticides/index.htm',hasChild:false},
{label:"Bug Killer",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Pesticides/index.htm',hasChild:false},
{label:"Drums ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/BarrelsDrums/index.htm',hasChild:false},
{label:"Oil Barrels",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/BarrelsDrums/index.htm',hasChild:false},
{label:"Oil Drums",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/BarrelsDrums/index.htm',hasChild:false},
{label:"Steel Drums",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/BarrelsDrums/index.htm',hasChild:false},
{label:"Pie Tins",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/FoilPiePans/index.htm',hasChild:false},
{label:"Pie Plates",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/FoilPiePans/index.htm',hasChild:false},
{label:"Lids - Jar",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/JarLids/index.htm',hasChild:false},
{label:"Jam Jar Lids",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/JarLids/index.htm',hasChild:false},
{label:"Cast Iron Skillets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/PotsPans/index.htm',hasChild:false},
{label:"Cooking Pots",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/PotsPans/index.htm',hasChild:false},
{label:"Frying Pans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/PotsPans/index.htm',hasChild:false},
{label:"Pans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/PotsPans/index.htm',hasChild:false},
{label:"Pie Pans ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/PotsPans/index.htm',hasChild:false},
{label:"Saucepans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/PotsPans/index.htm',hasChild:false},
{label:"Skillets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/PotsPans/index.htm',hasChild:false},
{label:"Wok",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/PotsPans/index.htm',hasChild:false},
{label:"Forks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/Silverware/index.htm',hasChild:false},
{label:"Knives",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/Silverware/index.htm',hasChild:false},
{label:"Serviceware",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/Silverware/index.htm',hasChild:false},
{label:"Spoons",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/Silverware/index.htm',hasChild:false},
{label:"Kitchen Tools",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/Silverware/index.htm',hasChild:false},
{label:"Fans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/SmallAppliances/index.htm',hasChild:false},
{label:"Kitchen Gadgets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/SmallAppliances/index.htm',hasChild:false},
{label:"Household Applicances",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/SmallAppliances/index.htm',hasChild:false},
{label:"Coffee Grinder",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/SmallAppliances/index.htm',hasChild:false},
{label:"Wine Foils",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/WineBottleFoil/index.htm',hasChild:false},
{label:"Foil - Aluminum",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/AluminumFoil/index.htm',hasChild:false},
{label:"Awls",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/HandTools/index.htm',hasChild:false},
{label:"Claw Hammer",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/HandTools/index.htm',hasChild:false},
{label:"Hammers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/HandTools/index.htm',hasChild:false},
{label:"Needle Nose Pliers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/HandTools/index.htm',hasChild:false},
{label:"Tape Measure",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/HandTools/index.htm',hasChild:false},
{label:"Chisel",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/HandTools/index.htm',hasChild:false},
{label:"Level",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/HandTools/index.htm',hasChild:false},
{label:"Pliers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/HandTools/index.htm',hasChild:false},
{label:"Roofing Hammer",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/HandTools/index.htm',hasChild:false},
{label:"Screw Drivers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/HandTools/index.htm',hasChild:false},
{label:"Wrenches",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/HandTools/index.htm',hasChild:false},
{label:"Coins",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/JewelryCoins/index.htm',hasChild:false},
{label:"Necklaces",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/JewelryCoins/index.htm',hasChild:false},
{label:"Pendants",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/JewelryCoins/index.htm',hasChild:false},
{label:"Bracelets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/JewelryCoins/index.htm',hasChild:false},
{label:"Rings",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/JewelryCoins/index.htm',hasChild:false},
{label:"Earrings",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/JewelryCoins/index.htm',hasChild:false},
{label:"Aluminum Pans",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/Aluminum/index.htm',hasChild:false},
{label:"Aluminum Scrap",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/Aluminum/index.htm',hasChild:false},
{label:"Pipe",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/CastIron/index.htm',hasChild:false},
{label:"Brass",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/CopperBronzeBrass/index.htm',hasChild:false},
{label:"Bronze",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/CopperBronzeBrass/index.htm',hasChild:false},
{label:"Precious Metals",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/GoldSilverEtc/index.htm',hasChild:false},
{label:"Silver",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/GoldSilverEtc/index.htm',hasChild:false},
{label:"Steel",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/IronSteel/index.htm',hasChild:false},
{label:"Ferrous Metal",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/ScrapMetal/index.htm',hasChild:false},
{label:"Hangers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/ScrapMetal/index.htm',hasChild:false},
{label:"Metal",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/ScrapMetal/index.htm',hasChild:false},
{label:"Metal Bits",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/ScrapMetal/index.htm',hasChild:false},
{label:"Metal Food Trays",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/ScrapMetal/index.htm',hasChild:false},
{label:"Metal Pieces",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/ScrapMetal/index.htm',hasChild:false},
{label:"Metal Scraps",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/ScrapMetal/index.htm',hasChild:false},
{label:"Tin",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/ScrapMetal/index.htm',hasChild:false},
{label:"Ring of Keys",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/SmallMetalItems/Keys/index.htm',hasChild:false},
{label:"Bolts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/SmallMetalItems/ScrewsNailsNutsBolts/index.htm',hasChild:false},
{label:"Hardware",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/SmallMetalItems/ScrewsNailsNutsBolts/index.htm',hasChild:false},
{label:"Metal Washers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/SmallMetalItems/ScrewsNailsNutsBolts/index.htm',hasChild:false},
{label:"Nails",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/SmallMetalItems/ScrewsNailsNutsBolts/index.htm',hasChild:false},
{label:"Washers - Metal",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/SmallMetalItems/ScrewsNailsNutsBolts/index.htm',hasChild:false},
{label:"Nuts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/SmallMetalItems/ScrewsNailsNutsBolts/index.htm',hasChild:false},
{label:"Cable",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/WireCable/index.htm',hasChild:false},
{label:"Foamboard",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Cardboard/Foamcore/index.htm',hasChild:false},
{label:"Cartons of Juice",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/MilkJuiceCartons/index.htm',hasChild:false},
{label:"Soup Cartons",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/MilkJuiceCartons/index.htm',hasChild:false},
{label:"Juice Cartons",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/MilkJuiceCartons/index.htm',hasChild:false},
{label:"Detergent Boxes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/LaundryDetergentBoxes/index.htm',hasChild:false},
{label:"Laundry Soap Box",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/LaundryDetergentBoxes/index.htm',hasChild:false},
{label:"Cups - Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/PaperCupsCoffeeCups/index.htm',hasChild:false},
{label:"Kleenex - Box",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/TissueBoxes/index.htm',hasChild:false},
{label:"Food Wrapper - Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Food-soiledPaper/index.htm',hasChild:false},
{label:"Kleenexes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/FacialTissue/index.htm',hasChild:false},
{label:"Tissues",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/FacialTissue/index.htm',hasChild:false},
{label:"Used Kleenexes",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/FacialTissue/index.htm',hasChild:false},
{label:"Used Tissues",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/FacialTissue/index.htm',hasChild:false},
{label:"Christmas Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/GiftWrap/index.htm',hasChild:false},
{label:"Wrapping Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/GiftWrap/index.htm',hasChild:false},
{label:"Dirty Napkins",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/Napkins/index.htm',hasChild:false},
{label:"Used Napkins",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/Napkins/index.htm',hasChild:false},
{label:"Soiled Napkins",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/Napkins/index.htm',hasChild:false},
{label:"5 Star Notebooks ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/Notebooks-Spiralbound/index.htm',hasChild:false},
{label:"Steno Pads",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/Notebooks-Spiralbound/index.htm',hasChild:false},
{label:"Notepad",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/Notebooks-Spiralbound/index.htm',hasChild:false},
{label:"Paper Grocery Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/PaperBags/index.htm',hasChild:false},
{label:"Grocery Bags - Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/PaperBags/index.htm',hasChild:false},
{label:"Used Paper Towels",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/PaperTowels/index.htm',hasChild:false},
{label:"Paper Shredded",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/ShreddedPaper/index.htm',hasChild:false},
{label:"Hardcover Books ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/BooksHardback/index.htm',hasChild:false},
{label:"Textbooks - Hardback",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/BooksHardback/index.htm',hasChild:false},
{label:"Textbooks - Paperback",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/BooksPaperback/index.htm',hasChild:false},
{label:"Softcover Books",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/BooksPaperback/index.htm',hasChild:false},
{label:"Envelopes - Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/EnvelopesTyvek/index.htm',hasChild:false},
{label:"Birthday Cards",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/GreetingCards/index.htm',hasChild:false},
{label:"Cards",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/GreetingCards/index.htm',hasChild:false},
{label:"Holiday Cards",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/GreetingCards/index.htm',hasChild:false},
{label:"Coupons",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/JunkMail/index.htm',hasChild:false},
{label:"Catalogues",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/Magazines/index.htm',hasChild:false},
{label:"Computer Papers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/OfficePaper/index.htm',hasChild:false},
{label:"Heat Printed Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/OfficePaper/index.htm',hasChild:false},
{label:"Hole Punch Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/OfficePaper/index.htm',hasChild:false},
{label:"Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/OfficePaper/index.htm',hasChild:false},
{label:"White Papers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/OfficePaper/index.htm',hasChild:false},
{label:"White Pages",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/PhoneBooks/index.htm',hasChild:false},
{label:"Yellow Pages",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/PhoneBooks/index.htm',hasChild:false},
{label:"Photo Paper",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/Photographs/index.htm',hasChild:false},
{label:"Pictures",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/Photographs/index.htm',hasChild:false},
{label:"Plastic Suit Bag",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Bags/DryCleanerBags/index.htm',hasChild:false},
{label:"#1 Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/WithRecycleNumbers/index.htm',hasChild:false},
{label:"#2 Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/WithRecycleNumbers/index.htm',hasChild:false},
{label:"#3 Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/WithRecycleNumbers/index.htm',hasChild:false},
{label:"#4 Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/WithRecycleNumbers/index.htm',hasChild:false},
{label:"#5 Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/WithRecycleNumbers/index.htm',hasChild:false},
{label:"#6 Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/WithRecycleNumbers/index.htm',hasChild:false},
{label:"#7 Plastic",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/WithRecycleNumbers/index.htm',hasChild:false},
{label:"Six Pack Rings",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/6-packPlasticRings/index.htm',hasChild:false},
{label:"Hard Plastic Packaging",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/BlisterPackages/index.htm',hasChild:false},
{label:"Molded Plastic Packaging",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/BlisterPackages/index.htm',hasChild:false},
{label:"Rigid Plastic Packaging",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/BlisterPackages/index.htm',hasChild:false},
{label:"Toy Plastic Packaging",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/BlisterPackages/index.htm',hasChild:false},
{label:"Foam Boards",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/FoamPackingSheets/index.htm',hasChild:false},
{label:"Foam Packaging",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/FoamPackingSheets/index.htm',hasChild:false},
{label:"Package Foam",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/FoamPackingSheets/index.htm',hasChild:false},
{label:"Packing Foam",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/FoamPackingSheets/index.htm',hasChild:false},
{label:"Foam Core",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/FoamPackingSheets/index.htm',hasChild:false},
{label:"Corn Starch Peanuts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/MailPackaging/PackingPeanuts/index.htm',hasChild:false},
{label:"Styrofoam Peanuts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/MailPackaging/PackingPeanuts/index.htm',hasChild:false},
{label:"Biodegradable Foam Peanuts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/MailPackaging/PackingPeanuts/index.htm',hasChild:false},
{label:"Bottle Tops",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/BottleCaps/index.htm',hasChild:false},
{label:"Beer Caps",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/BottleCaps/index.htm',hasChild:false},
{label:"Jewel Cases",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/CDCases/index.htm',hasChild:false},
{label:"DVD Cases",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/CDCases/index.htm',hasChild:false},
{label:"CD Cases",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/CDCases/index.htm',hasChild:false},
{label:"Glasses Frames",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/EyeglassFrames/index.htm',hasChild:false},
{label:"Cartridges - Printer",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/PrinterCartridges/index.htm',hasChild:false},
{label:"Dry Cleaning Bags",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/ShrinkWrap/index.htm',hasChild:false},
{label:"Plastic Film",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/ShrinkWrap/index.htm',hasChild:false},
{label:"Advil Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/MedicineBottles/index.htm',hasChild:false},
{label:"Aspirin Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/MedicineBottles/index.htm',hasChild:false},
{label:"Iburprofen Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/MedicineBottles/index.htm',hasChild:false},
{label:"Tylenol Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/MedicineBottles/index.htm',hasChild:false},
{label:"Mop Buckets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/Buckets/index.htm',hasChild:false},
{label:"Pails",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/Buckets/index.htm',hasChild:false},
{label:"Detergent Jugs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/LaundryDetergentJugs/index.htm',hasChild:false},
{label:"Bug Spray Bottles",value:'',hasChild:false},
{label:"Weed Killer Bottles",value:'',hasChild:false},
{label:"Food Tubs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PlasticTubs/index.htm',hasChild:false},
{label:"Yogurt Tubs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PlasticTubs/index.htm',hasChild:false},
{label:"Margarine Tubs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PlasticTubs/index.htm',hasChild:false},
{label:"Margarine Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PlasticTubs/index.htm',hasChild:false},
{label:"Yogurt Containers",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PlasticTubs/index.htm',hasChild:false},
{label:"Plastic Tubs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PlasticTubs/index.htm',hasChild:false},
{label:"Tupperware",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PlasticTubs/index.htm',hasChild:false},
{label:"Prescription Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/PrescriptionDrugContainers/index.htm',hasChild:false},
{label:"Pill Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/PrescriptionDrugContainers/index.htm',hasChild:false},
{label:"Rx Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/PrescriptionDrugContainers/index.htm',hasChild:false},
{label:"Conditioner Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/ShampooLotionBottles/index.htm',hasChild:false},
{label:"Lotion Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/ShampooLotionBottles/index.htm',hasChild:false},
{label:"Soap Bottles",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/ShampooLotionBottles/index.htm',hasChild:false},
{label:"Cups - Styrofoam",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/StyrofoamCupsUtensils/index.htm',hasChild:false},
{label:"Styrofoam",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/StyrofoamBlocks/index.htm',hasChild:false},
{label:"Styrofoam Packaging",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/StyrofoamBlocks/index.htm',hasChild:false},
{label:"Auto Engines",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm',hasChild:false},
{label:"Automobile Engines",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm',hasChild:false},
{label:"Car Engines",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm',hasChild:false},
{label:"Starters",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm',hasChild:false},
{label:"Transmissions",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm',hasChild:false},
{label:"Car Motors",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm',hasChild:false},
{label:"Car Parts",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm',hasChild:false},
{label:"Carbureators",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm',hasChild:false},
{label:"Fuel Injectors",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm',hasChild:false},
{label:"Gas Tanks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm',hasChild:false},
{label:"Gaskets",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm',hasChild:false},
{label:"Motors",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm',hasChild:false},
{label:"Emergency Flares",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/Flares/index.htm',hasChild:false},
{label:"Road Flares",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/Flares/index.htm',hasChild:false},
{label:"Car Fluids",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/OtherVehicleFluids/index.htm',hasChild:false},
{label:"Power Steering Fluid",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/OtherVehicleFluids/index.htm',hasChild:false},
{label:"Windshield Washer Fluid",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/OtherVehicleFluids/index.htm',hasChild:false},
{label:"Cars",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/Vehicles/index.htm',hasChild:false},
{label:"SUVs",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/Vehicles/index.htm',hasChild:false},
{label:"Trucks",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/Vehicles/index.htm',hasChild:false},
{label:"Vehicle Batteries",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/VehicleBatteries/index.htm',hasChild:false},
{label:"Batteries - Car",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/VehicleBatteries/index.htm',hasChild:false},
{label:"Batteries - Vehicle",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/VehicleBatteries/index.htm',hasChild:false},
{label:"Christmas Wreaths",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/ChristmasTrees/index.htm',hasChild:false},
{label:"Xmas Trees",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/ChristmasTrees/index.htm',hasChild:false},
{label:"Unpainted Boards",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/ReusableLumber/index.htm',hasChild:false},
{label:"Untreated Boards",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/ReusableLumber/index.htm',hasChild:false},
{label:"Untreated Wood",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/ReusableLumber/index.htm',hasChild:false},
{label:"Unpainted Wood",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/ReusableLumber/index.htm',hasChild:false},
{label:"Lumber",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/ReusableLumber/index.htm',hasChild:false},
{label:"Wood Shavings",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/WoodScrapsShavings/index.htm',hasChild:false},
{label:"Sawdust",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/WoodScrapsShavings/index.htm',hasChild:false},
{label:"Wood Chips",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/WoodScrapsShavings/index.htm',hasChild:false},
{label:"Sod",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/GrassClipingsSod/index.htm',hasChild:false},
{label:"Potted Plants",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/HousePlants/index.htm',hasChild:false},
{label:"Live Plants",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/HousePlants/index.htm',hasChild:false},
{label:"Plants in Pots ",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/HousePlants/index.htm',hasChild:false},
{label:"Garden Waste",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/LeavesNon-WoodyYardwaste/index.htm',hasChild:false},
{label:"Compost",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/LeavesNon-WoodyYardwaste/index.htm',hasChild:false},
{label:"Yard Debris",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/LeavesNon-WoodyYardwaste/index.htm',hasChild:false},
{label:"Yard Waste",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/LeavesNon-WoodyYardwaste/index.htm',hasChild:false},
{label:"Leaves",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/LeavesNon-WoodyYardwaste/index.htm',hasChild:false},
{label:"Weeds",value:'/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/LeavesNon-WoodyYardwaste/index.htm',hasChild:false}
]
// This tree implementation is originally from https://github.com/benoitvallon/computer-science-in-javascript . Added and trimmed where necessary
function Node(data) {
  this.data = data;
  this.children = [];
  //added a parent connector
  this.parent = null;
}

function Tree() {
  this.root = null;
}

Tree.prototype.add = function(data, toNodeData) {
  var node = new Node(data);
  var parent = toNodeData ? this.findBFS(toNodeData) : null;
  node.parent = parent;
  if(parent) {
    parent.children.push(node);
  } else {
    if(!this.root) {
      this.root = node;
    } else {
      return 'Root node is already assigned';
    }
  }
};
Tree.prototype.remove = function(data) {
  if(this.root.data === data) {
    this.root = null;
  }

  var queue = [this.root];
  while(queue.length) {
    var node = queue.shift();
    for(var i = 0; i < node.children.length; i++) {
      if(node.children[i].data === data) {
        node.children.splice(i, 1);
      } else {
        queue.push(node.children[i]);
      }
    }
  }
};
Tree.prototype.contains = function(data) {
  return this.findBFS(data) ? true : false;
};
Tree.prototype.findBFS = function(data) {
  var queue = [this.root];
  while(queue.length) {
    var node = queue.shift();
    if(node.data === data) {
      return node;
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  return null;
};
Tree.prototype._preOrder = function(node, fn) {
  if(node) {
    if(fn) {
      fn(node);
    }
    for(var i = 0; i < node.children.length; i++) {
      this._preOrder(node.children[i], fn);
    }
  }
};
Tree.prototype._postOrder = function(node, fn) {
  if(node) {
    for(var i = 0; i < node.children.length; i++) {
      this._postOrder(node.children[i], fn);
    }
    if(fn) {
      fn(node);
    }
  }
};
Tree.prototype.traverseDFS = function(fn, method) {
  var current = this.root;
  if(method) {
    this['_' + method](current, fn);
  } else {
    this._preOrder(current, fn);
  }
};
Tree.prototype.traverseBFS = function(fn) {
  var queue = [this.root];
  while(queue.length) {
    var node = queue.shift();
    if(fn) {
      fn(node);
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
};
Tree.prototype.print = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('|');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + ' ';
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  console.log(string.slice(0, -2).trim());
};
Tree.prototype.printByLevel = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('\n');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  console.log(string.trim());
};
//TODO: takes in a leaf data string and returns it's address as a string formatted [num, num, ... num]
//where tree.root.children[num].children[num]...children[num].data is the string put in
Tree.prototype.findAddress = function(data){
	if(!this.contains(data, this.traverseBF)){
		return console.log("Tree does not contain "+ data);
	}
	return true
}

Tree.prototype.findEveryLeaf = function(){
	var leafArray = []
	//TODO: find every leaf Node and push it into leafArray
	return leafArray;
}

//finds the URL to scrape data from by adding parent's name to base URL
Tree.prototype.findUrl = function(leaf){
	var url = "https://www.seattle.gov/util/MyServices/WhereDoesItGo/"
	while(leaf.data!=='rootNode'){
		url += leaf.data + "/";
		//Bad Idea. Will fix
		leaf = leaf.parent;
	}
	url += "index.htm";
	return url
}
// End Tree Implementation











//formatting whereDoesItGo. Changes the value string => array. 
//This could be done with regular expressions, but an array containing the parents seems easier to me.
//TODO: adapt for different inputs. because of the slice(4,-1) this could break easily when we include the category titles
function formatRecycleArray(whereRecycleArray){
  whereRecycleArray.forEach(branchInfo => branchInfo.value = branchInfo.value.split("/").slice(4,-1))
  return whereRecycleArray;
}

//creates a tree with a root node of "rootNode" with children of general recycle materials based on "Where does it go" on seattle.gov
//each of those branches can have more branches with more specific recycling materials/objects
function createRecycleTree(recycleArray){
  var recycleTree = new Tree()
  recycleTree.add("rootNode")

  //format object so its easier to use if it's not formatted
  if(typeof recycleArray[0].value==="string"){
  	recycleArray = formatRecycleArray(recycleArray)
  }

  // recycleArray.forEach(branchInfo => {
  //   branchInfo.value.filter(branchName => recycleTree.contains(branchName)).forEach((branchName, index) =>{
  //   	var infoToAdd = branchInfo.value[index-1] || "rootNode"
  //       recycleTree.add(branchName, infoToAdd)
  //   })
  //   //add the leafs 
  //   recycleTree.add(branchInfo.label, branchInfo.value[branchInfo.value.length-1])
  //   }
  // )

    recycleArray.forEach(branchInfo => {
	    branchInfo.value.forEach((branchName, index) => {
	      !recycleTree.contains(branchName) && 
	        (branchInfo.value[index-1] ? recycleTree.add(branchName, branchInfo.value[index-1]) : recycleTree.add(branchName, "rootNode"))
	    })
	recycleTree.add(branchInfo.label, branchInfo.value[branchInfo.value.length-1])
	})
  return recycleTree
}

createRecycleTree(whereDoesItGo);