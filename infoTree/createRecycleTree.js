// import whereDoesItGo from './whereDoesItGo';
// import nodeList from './nodeList';


var nodeList = [
{"label":"Where Does It Go?","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/index.htm","hasChild":true},
{"label":"Household Items","value":"","hasChild":true},
{"label":"Appliances","value":"","hasChild":true},
{"label":"Air Conditioners or Heat Pumps","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/AirConditionersHeatPumps/index.htm","hasChild":false},
{"label":"Blenders","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/Blenders/index.htm","hasChild":false},
{"label":"Food Processors","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/FoodProcessors/index.htm","hasChild":false},
{"label":"Mixers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/Mixers/index.htm","hasChild":false},
{"label":"Other Large Appliances","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/OtherLargeAppliances/index.htm","hasChild":false},
{"label":"Refrigerators or Freezers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/RefrigeratorsFreezers/index.htm","hasChild":false},
{"label":"Stoves","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/Stoves/index.htm","hasChild":false},
{"label":"Toasters","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/Toasters/index.htm","hasChild":false},
{"label":"Washers or Dryers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/WashersDryers/index.htm","hasChild":false},
{"label":"Water Heaters","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Appliances/WaterHeaters/index.htm","hasChild":false},
{"label":"Batteries","value":"","hasChild":true},
{"label":"Alkaline Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/AlkalineBatteries/index.htm","hasChild":false},
{"label":"Camera or Watch Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/CameraWatchBatteries/index.htm","hasChild":false},
{"label":"Computer Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/ComputerBatteries/index.htm","hasChild":false},
{"label":"Cell Phone Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/CellPhoneBatteries/index.htm","hasChild":false},
{"label":"Hearing Aid Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/HearingAidBatteries/index.htm","hasChild":false},
{"label":"Lithium Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/LithiumBatteries/index.htm","hasChild":false},
{"label":"Rechargeable Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/RechargeableBatteries/index.htm","hasChild":false},
{"label":"Rechargeable Appliances","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/RechargeableAppliances/index.htm","hasChild":false},
{"label":"Car or Lead-Acid Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Batteries/CarLead-AcidBatteries/index.htm","hasChild":false},
{"label":"Bathroom & Laundry","value":"","hasChild":true},
{"label":"Disposable Diapers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/DisposableDiapers/index.htm","hasChild":false},
{"label":"Dryer Sheets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/DryerSheets/index.htm","hasChild":false},
{"label":"Flushable Wipes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/FlushableWipes/index.htm","hasChild":false},
{"label":"Mercury Thermometers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/MercuryThermometers/index.htm","hasChild":false},
{"label":"Metal Sinks, Tubs or Fixtures","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/SinkTubsFixtures-Metal/index.htm","hasChild":false},
{"label":"Mirrors","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/Mirrors/index.htm","hasChild":false},
{"label":"Porcelain Sinks, Toilets or Tubs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/BathroomLaundry/PorcelainItems/index.htm","hasChild":false},
{"label":"Bedroom","value":"","hasChild":true},
{"label":"Bed Frames","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/BedFrames/index.htm","hasChild":false},
{"label":"Bedding or Linens","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/BeddingLinens/index.htm","hasChild":false},
{"label":"Clothes or Shoes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesShoes/index.htm","hasChild":false},
{"label":"Mattresses or Futons","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/MatressesFutons/index.htm","hasChild":false},
{"label":"Plastic Clothes Hangers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/PlasticClothesHangers/index.htm","hasChild":false},
{"label":"Wire Clothes Hangers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesHangersWire/index.htm","hasChild":false},
{"label":"Wood Clothes Hangers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Bedroom/ClothesHangersWood/index.htm","hasChild":false},
{"label":"Garage & Outdoor","value":"","hasChild":true},
{"label":"Bicycles or Bike Parts","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/BicyclesBikeParts/index.htm","hasChild":false},
{"label":"Child Car Seats","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ChildCarSeats/index.htm","hasChild":false},
{"label":"Garden Hoses","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/GardenHoses/index.htm","hasChild":false},
{"label":"Latex Paint","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/Paint-Latex/index.htm","hasChild":false},
{"label":"Lawn Mowers or Power Equipment","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/LawnMowersPowerEquipment/index.htm","hasChild":false},
{"label":"Oil-Based Paint","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/Oil-BasedPaint/index.htm","hasChild":false},
{"label":"Plant or Tree Salvage","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlantTreeSalvage/index.htm","hasChild":false},
{"label":"Plant Pots","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlantPots/index.htm","hasChild":false},
{"label":"Plastic Outdoor Furniture","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/PlasticOutdoorFurniture/index.htm","hasChild":false},
{"label":"Tarps","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/Tarps/index.htm","hasChild":false},
{"label":"Toys or Sporting Goods","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/GarageOutdoor/ToysSportingGoods/index.htm","hasChild":false},
{"label":"Kitchen","value":"","hasChild":true},
{"label":"Baking Trays or Cookie Sheets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/BakingTraysCookieSheets/index.htm","hasChild":false},
{"label":"Blenders","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/Blenders/index.htm","hasChild":false},
{"label":"Cookie Tins","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/CookieTins/index.htm","hasChild":false},
{"label":"Food Processors","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/FoodProcessors/index.htm","hasChild":false},
{"label":"Microwaves","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/Microwaves/index.htm","hasChild":false},
{"label":"Mixers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/Mixers/index.htm","hasChild":false},
{"label":"Mugs, Plates, or Bowls","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/MugsPlatesBowls/index.htm","hasChild":false},
{"label":"Toasters","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/Toasters/index.htm","hasChild":false},
{"label":"Refrigerators or Freezers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/RefrigeratorsFreezers/index.htm","hasChild":false},
{"label":"Reusable Shopping Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/ReusableShoppingBags/index.htm","hasChild":false},
{"label":"Stoves","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/Kitchen/Stoves/index.htm","hasChild":false},
{"label":"Lights & Bulbs","value":"","hasChild":true},
{"label":"Fluorescent Light Bulbs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsFluorescent/index.htm","hasChild":false},
{"label":"Halogen or Xenon Light Bulbs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsHalogenXenon/index.htm","hasChild":false},
{"label":"Holiday Lights","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/HolidayLights/index.htm","hasChild":false},
{"label":"Incandescent Light Bulbs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsIncandescent/index.htm","hasChild":false},
{"label":"LED Light Bulbs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/LightsBulbs/LightBulbsLED/index.htm","hasChild":false},
{"label":"Misc. Household","value":"","hasChild":true},
{"label":"Candles","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/Candles/index.htm","hasChild":false},
{"label":"Carpet or Padding","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/CarpetPadding/index.htm","hasChild":false},
{"label":"Dead Animals","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/DeadAnimals/index.htm","hasChild":false},
{"label":"Fireplace or Briquette Ashes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/Ashes/index.htm","hasChild":false},
{"label":"Gel Packs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/GelPacks/index.htm","hasChild":false},
{"label":"Household Furniture","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/HouseholdFurniture/index.htm","hasChild":false},
{"label":"Landline Telephones","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/TelephonesLandline/index.htm","hasChild":false},
{"label":"Office Furniture or Equipment","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/OfficeFurnitureEquipment/index.htm","hasChild":false},
{"label":"Pet Food","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetFood/index.htm","hasChild":false},
{"label":"Pet Waste or Litter","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PetWasteLitter/index.htm","hasChild":false},
{"label":"Toner or Printer Cartridges","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/PrinterCartridgesToner/index.htm","hasChild":false},
{"label":"Smoke Detectors","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/SmokeDetectors/index.htm","hasChild":false},
{"label":"Window Blinds","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/WindowBlinds/index.htm","hasChild":false},
{"label":"Window or Picture Glass","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HouseholdItems/MiscHousehold/WindownPictureGlass/index.htm","hasChild":false},
{"label":"Construction & Demolition","value":"","hasChild":true},
{"label":"Exterior","value":"","hasChild":true},
{"label":"Gutters","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/Exterior/Gutters/index.htm","hasChild":false},
{"label":"Mixed C & D","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/Exterior/MixedCD/index.htm","hasChild":false},
{"label":"Plant or Tree Salvage","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/Exterior/PlantTreeSalvage/index.htm","hasChild":false},
{"label":"Floors & Ceiling","value":"","hasChild":true},
{"label":"Acoustic Ceiling Tile","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/AcousticCeilingTile/index.htm","hasChild":false},
{"label":"Asbestos","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/Asbestos/index.htm","hasChild":false},
{"label":"Asphalt Roofing","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/AsphaltRoofing/index.htm","hasChild":false},
{"label":"Carpet or Padding","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FloorsCeiling/CarpetPadding/index.htm","hasChild":false},
{"label":"Furnaces & Fixtures","value":"","hasChild":true},
{"label":"Ducts. Furnace Parts, Fireplace Inserts","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FurnacesFixtures/Ducts/index.htm","hasChild":false},
{"label":"Fiberglass","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FurnacesFixtures/Fiberglass/index.htm","hasChild":false},
{"label":"Furnaces","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FurnacesFixtures/Furnaces/index.htm","hasChild":false},
{"label":"Metal Sinks, Tubs or Fixtures","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FurnacesFixtures/SinkTubsFixtures--Metal/index.htm","hasChild":false},
{"label":"Porcelain Sinks, Toilets or Tubs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/FurnacesFixtures/PorcelainItems/index.htm","hasChild":false},
{"label":"Salvaged Materials","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SalvagedMaterials/index.htm","hasChild":false},
{"label":"Soil, Rock, Brick, & Concrete","value":"","hasChild":true},
{"label":"Brick","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/Brick/index.htm","hasChild":false},
{"label":"Concrete or Asphalt","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/ConcreteAsphalt/index.htm","hasChild":false},
{"label":"Contaminated Dirt or Soil","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/ContaminatedSoil/index.htm","hasChild":false},
{"label":"Dirt or Soil","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/DirtSoil/index.htm","hasChild":false},
{"label":"Rocks or Gravel","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/SoilRockBrickConcrete/RockGravel/index.htm","hasChild":false},
{"label":"Windows & Walls","value":"","hasChild":true},
{"label":"Broken Glass","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/BrokenGlass/index.htm","hasChild":false},
{"label":"Drywall","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/Drywall/index.htm","hasChild":false},
{"label":"Latex Paint","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/Paint--Latex/index.htm","hasChild":false},
{"label":"Oil-Based Paint","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/Paint--Oil-Based/index.htm","hasChild":false},
{"label":"Windows","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WindowsWalls/Windows/index.htm","hasChild":false},
{"label":"Wood Wastes","value":"","hasChild":true},
{"label":"Clean Wood Waste","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWasteClean/index.htm","hasChild":false},
{"label":"Composite Wood Paneling","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/PanelingCompositeWoods/index.htm","hasChild":false},
{"label":"Lumber or Boards","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/LumberBoards/index.htm","hasChild":false},
{"label":"Painted or Treated Wood","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/WoodWastePaintedTreated/index.htm","hasChild":false},
{"label":"Pallets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/Pallets/index.htm","hasChild":false},
{"label":"Trees or Brush","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/ConstructionDemolition/WoodWastes/TreesBrush/index.htm","hasChild":false},
{"label":"Electronics","value":"","hasChild":true},
{"label":"Batteries","value":"","hasChild":true},
{"label":"Alkaline Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/Batteries/HouseholdAlkalineBatteries/index.htm","hasChild":false},
{"label":"Camera or Watch Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/Batteries/CameraWatchBatteries/index.htm","hasChild":false},
{"label":"Computer Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/Batteries/ComputerBatteries/index.htm","hasChild":false},
{"label":"Cell Phone Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/Batteries/CellPhoneBatteries/index.htm","hasChild":false},
{"label":"Hearing Aid Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/Batteries/HearingAidBatteries/index.htm","hasChild":false},
{"label":"Lithium Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/Batteries/Lithium/index.htm","hasChild":false},
{"label":"Rechargeable Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/Batteries/RechargeableBatteries/index.htm","hasChild":false},
{"label":"Rechargeable Appliances","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/Batteries/RechargeableAppliances/index.htm","hasChild":false},
{"label":"Car or Lead-Acid Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/Batteries/CarLead-AcidBatteries/index.htm","hasChild":false},
{"label":"CDs, DVDs, or Floppies","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/CDsDVDsFloppies/index.htm","hasChild":false},
{"label":"Cell Phones","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/CellPhones/index.htm","hasChild":false},
{"label":"Clock Radios","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/ClockRadios/index.htm","hasChild":false},
{"label":"Computers or Laptops","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/ComputersLaptops/index.htm","hasChild":false},
{"label":"Computer Monitors","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/ComputerMonitors/index.htm","hasChild":false},
{"label":"Copiers or Fax Machines","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/CopiersFaxMachines/index.htm","hasChild":false},
{"label":"E-readers ","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-readers/index.htm","hasChild":false},
{"label":"E-waste","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/E-waste/index.htm","hasChild":false},
{"label":"Landline Telephones","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/TelephonesLandline/index.htm","hasChild":false},
{"label":"Other Electronic Devices","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/OtherElectronicDevices/index.htm","hasChild":false},
{"label":"Toner or Printer Cartridges","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/PrinterCartridgesToner/index.htm","hasChild":false},
{"label":"Printers or Peripherals","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/PrintersPeripherals/index.htm","hasChild":false},
{"label":"Stereo or Audio Equipment","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/StereoAudioEquipment/index.htm","hasChild":false},
{"label":"Televisions","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/Televisions/index.htm","hasChild":false},
{"label":"VCRs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Electronics/VCRs/index.htm","hasChild":false},
{"label":"Fabric","value":"","hasChild":true},
{"label":"Bedding or Linens","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Fabric/BeddingLinens/index.htm","hasChild":false},
{"label":"Carpet or Padding","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Fabric/CarpetPadding/index.htm","hasChild":false},
{"label":"Clothes or Shoes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Fabric/ClothesShoes/index.htm","hasChild":false},
{"label":"Dryer Sheets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Fabric/DryerSheets/index.htm","hasChild":false},
{"label":"Fabric or Textiles","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Fabric/FabricTextiles/index.htm","hasChild":false},
{"label":"Reusable Shopping Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Fabric/ReusableShoppingBags/index.htm","hasChild":false},
{"label":"Food","value":"","hasChild":true},
{"label":"Cooking Oil","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/CookingOil/index.htm","hasChild":false},
{"label":"Fats, Oils, or Grease","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FatsOilsGrease/index.htm","hasChild":false},
{"label":"Food Scraps","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/FoodScraps--All/index.htm","hasChild":false},
{"label":"Pet Food","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/PetFood/index.htm","hasChild":false},
{"label":"Vitamins","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Food/Vitamins/index.htm","hasChild":false},
{"label":"Food Packaging","value":"","hasChild":true},
{"label":"Aluminum Foil or Trays","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/AluminumFoilTrays/index.htm","hasChild":false},
{"label":"Bags & Pouches","value":"","hasChild":true},
{"label":"Bread Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/BreadBags/index.htm","hasChild":false},
{"label":"Compostable Bags ","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/CompostableBags/index.htm","hasChild":false},
{"label":"Chip Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ChipBags/index.htm","hasChild":false},
{"label":"Food Box Liners","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/FoodBoxLiners/index.htm","hasChild":false},
{"label":"Grocery Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/GroceryBags/index.htm","hasChild":false},
{"label":"Juice Pouches","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/JuicePouches/index.htm","hasChild":false},
{"label":"Microwave Popcorn Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/MicrowavePopcornBags/index.htm","hasChild":false},
{"label":"Plastic without Recycle Symbol","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/PlasticNoRecycleSymbol/index.htm","hasChild":false},
{"label":"Pet Food Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/PetFoodBags/index.htm","hasChild":false},
{"label":"Produce or Bulk Food Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ProduceBulkFoodBags/index.htm","hasChild":false},
{"label":"Ziploc Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BagsPouches/ZiplocBags/index.htm","hasChild":false},
{"label":"Bottles & Jugs","value":"","hasChild":true},
{"label":"Bottle Caps or Jar Lids","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/BottleCapsJarLids/index.htm","hasChild":false},
{"label":"Plastic Water or Soda Bottles","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticBottlesWaterSoda/index.htm","hasChild":false},
{"label":"Plastic Milk or Juice Jugs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticMilkJuiceJug/index.htm","hasChild":false},
{"label":"Plastic without Recycle Symbol","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BottlesJugs/PlasticNoRecycleSymbol/index.htm","hasChild":false},
{"label":"Boxes, Cartons & Liners","value":"","hasChild":true},
{"label":"Aseptic or Tetra Pak","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/AsepticTetraPak/index.htm","hasChild":false},
{"label":"Butter Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/ButterBoxes/index.htm","hasChild":false},
{"label":"Cardboard and Metal Containers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/CardboardMetalContainers/index.htm","hasChild":false},
{"label":"Cereal or Cracker Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/CerealCrackerBoxes/index.htm","hasChild":false},
{"label":"Food Box Liners","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/FoodBoxLiners/index.htm","hasChild":false},
{"label":"Frozen Food Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/FrozenFoodBoxes/index.htm","hasChild":false},
{"label":"Ice Cream Cartons","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/IceCreamCartons/index.htm","hasChild":false},
{"label":"Juice Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/JuiceBoxes/index.htm","hasChild":false},
{"label":"Milk Cartons","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/MilkCartons/index.htm","hasChild":false},
{"label":"Paper Berry Baskets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/PaperBerryBaskets/index.htm","hasChild":false},
{"label":"Paper Egg Cartons","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/PaperEggCartons/index.htm","hasChild":false},
{"label":"Pizza Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/PizzaBoxes/index.htm","hasChild":false},
{"label":"Soup Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/SoupBoxes/index.htm","hasChild":false},
{"label":"Take-Out Containers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/BoxesCartonsLiners/Take-OutContainers/index.htm","hasChild":false},
{"label":"Butter Wrappers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/ButterWrappers/index.htm","hasChild":false},
{"label":"Coffee Filters ","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CoffeeFilters/index.htm","hasChild":false},
{"label":"Compostable Food Service Items","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/CompostableFoodServiceItems/index.htm","hasChild":false},
{"label":"Corks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Corks/index.htm","hasChild":false},
{"label":"Egg Cartons","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/EggCartons/index.htm","hasChild":false},
{"label":"Glass Bottles or Jars","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/GlassBottlesJars/index.htm","hasChild":false},
{"label":"Hot Cups or Coffee Cups","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/HotCoffeeCups/index.htm","hasChild":false},
{"label":"Lids","value":"","hasChild":true},
{"label":"Bottle Caps or Jar Lids","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Lids/BottleCapsJarLids/index.htm","hasChild":false},
{"label":"Can Lids","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Lids/CanLids/index.htm","hasChild":false},
{"label":"Deli, Coffee, or Soft Drink Lids","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Lids/LidsDeliCoffeeSoftDrink/index.htm","hasChild":false},
{"label":"Plastic Lids","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Lids/Lids-Plastic/index.htm","hasChild":false},
{"label":"Metal Cans & Metal Lids","value":"","hasChild":true},
{"label":"Aerosol Cans","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/AerosolCans/index.htm","hasChild":false},
{"label":"Beverage Cans","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/BeverageCans/index.htm","hasChild":false},
{"label":"Bottle Caps or Jar Lids","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/BottleCapsJarLids/index.htm","hasChild":false},
{"label":"Steel or Tin Cans and Lids","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/MetalCansMetalLids/SteelTinCansLids/index.htm","hasChild":false},
{"label":"Paper & Cardboard","value":"","hasChild":true},
{"label":"Cardboard Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/CardboardBoxes/index.htm","hasChild":false},
{"label":"Paper Berry Baskets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/PaperBerryBaskets/index.htm","hasChild":false},
{"label":"Paper Egg Cartons","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/PaperEggCartons/index.htm","hasChild":false},
{"label":"Paper Plates or Cups","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/PaperCupsCoffeeeCups/index.htm","hasChild":false},
{"label":"Pizza Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/PizzaBoxes/index.htm","hasChild":false},
{"label":"Soiled or Greasy Cardboard","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/CardboardSoiledorGreasy/index.htm","hasChild":false},
{"label":"Take-Out Containers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/Take-OutContainers/index.htm","hasChild":false},
{"label":"Waxed Cardboard","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/CardboardWaxed/index.htm","hasChild":false},
{"label":"Waxed Paper","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PaperCardboard/WaxedPaper/index.htm","hasChild":false},
{"label":"Plastic & Styrofoam Containers","value":"","hasChild":true},
{"label":"Clamshell Containers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/ClamshellContainers/index.htm","hasChild":false},
{"label":"Deli, Coffee, or Soft Drink Lids","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/Lids-DeliCoffeeSoftDrink/index.htm","hasChild":false},
{"label":"Foam Egg Cartons","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/EggCartons/index.htm","hasChild":false},
{"label":"Meat or Food Trays","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/MeatFoodTrays/index.htm","hasChild":false},
{"label":"Peanut Butter or Mayonnaise Jars","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PeanutButterMayonnaiseJars/index.htm","hasChild":false},
{"label":"Plastic Berry Baskets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/BerryBaskets/index.htm","hasChild":false},
{"label":"Plastic Berry Trays","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/BerryTrays/index.htm","hasChild":false},
{"label":"Plastic Cups or Utensils","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm","hasChild":false},
{"label":"Plastic Food Tubs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticFoodTubs/index.htm","hasChild":false},
{"label":"Plastic without Recycle Symbol","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/PlasticNoRecycleSymbol/index.htm","hasChild":false},
{"label":"Take-Out Containers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/Take-OutContainers/index.htm","hasChild":false},
{"label":"Tupperware","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/PlasticStyrofoamContainers/Tupperware/index.htm","hasChild":false},
{"label":"Straws","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/FoodPackaging/Straws/index.htm","hasChild":false},
{"label":"Glass & Ceramics","value":"","hasChild":true},
{"label":"Auto Glass","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/AutoGlass/index.htm","hasChild":false},
{"label":"Broken Glass","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/BrokenGlass/index.htm","hasChild":false},
{"label":"Drinking Glasses","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/DrinkingGlasses/index.htm","hasChild":false},
{"label":"Eyeglasses","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/EyeGlasses/index.htm","hasChild":false},
{"label":"Glass Bottles or Jars","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/GlassBottlesJars/index.htm","hasChild":false},
{"label":"Glass or Ceramic Household Items","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/GlassCeramicHouseholdItems/index.htm","hasChild":false},
{"label":"Fluorescent Light Bulbs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/LightBulbsFluorescent/index.htm","hasChild":false},
{"label":"Halogen or Xenon Light Bulbs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/LightBulbsHalogenXenon/index.htm","hasChild":false},
{"label":"Incandescent Light Bulbs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/LightBulbsIncandescent/index.htm","hasChild":false},
{"label":"LED Light Bulbs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/LightBulbsLED/index.htm","hasChild":false},
{"label":"Mercury Thermometers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/MercuryThermometers/index.htm","hasChild":false},
{"label":"Mirrors","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/Mirrors/index.htm","hasChild":false},
{"label":"Mugs, Plates, or Bowls","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/MugsPlatesBowls/index.htm","hasChild":false},
{"label":"Window or Picture Glass","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/GlassCeramics/WindowPictureGlass/index.htm","hasChild":false},
{"label":"Hazardous Items","value":"","hasChild":true},
{"label":"Aerosol Cans","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AerosolCans/index.htm","hasChild":false},
{"label":"Ammunition or Guns","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/AmmunitionGuns/index.htm","hasChild":false},
{"label":"Asbestos","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Asbestos/index.htm","hasChild":false},
{"label":"Batteries","value":"","hasChild":true},
{"label":"Alkaline Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Batteries/AlkalineBatteries/index.htm","hasChild":false},
{"label":"Camera or Watch Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Batteries/CameraWatchBatteries/index.htm","hasChild":false},
{"label":"Computer Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Batteries/ComputerBatteries/index.htm","hasChild":false},
{"label":"Cell Phone Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Batteries/CellPhoneBatteries/index.htm","hasChild":false},
{"label":"Hearing Aid Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Batteries/HearingAidBatteries/index.htm","hasChild":false},
{"label":"Lithium Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Batteries/Lithium/index.htm","hasChild":false},
{"label":"Rechargeable Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Batteries/RechargeableBatteries/index.htm","hasChild":false},
{"label":"Rechargeable Appliances","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Batteries/RechargeableAppliances/index.htm","hasChild":false},
{"label":"Car or Lead-Acid Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Batteries/CarLead-AcidBatteries/index.htm","hasChild":false},
{"label":"Compressed Gas Containers","value":"","hasChild":true},
{"label":"Aerosol Cans","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/AerosolCans/index.htm","hasChild":false},
{"label":"Fire Extinguishers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/FireExtinguishers/index.htm","hasChild":false},
{"label":"Helium Tanks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/HeliumTanks/index.htm","hasChild":false},
{"label":"Oxygen and Acetylene Tanks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/OxygenAcetyleneTanks/index.htm","hasChild":false},
{"label":"Propane Tanks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/PropaneTanks/index.htm","hasChild":false},
{"label":"Small Gas Canisters","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/CompressedGasContainers/GasCanistersSmall/index.htm","hasChild":false},
{"label":"Contaminated Dirt or Soil","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/ContaminatedSoil/index.htm","hasChild":false},
{"label":"Fiberglass","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Fiberglass/index.htm","hasChild":false},
{"label":"Fireworks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Fireworks/index.htm","hasChild":false},
{"label":"Fluorescent Light Bulbs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LightBulbsFluorescent/index.htm","hasChild":false},
{"label":"Liquids & Household Supplies","value":"","hasChild":true},
{"label":"Antifreeze","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/Anti-Freeze/index.htm","hasChild":false},
{"label":"Bleach","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/Bleach/index.htm","hasChild":false},
{"label":"Brake or Transmission Fluid","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/BrakeTransmissionFluid/index.htm","hasChild":false},
{"label":"Cleaning Supplies","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/CleaningSupplies/index.htm","hasChild":false},
{"label":"Gasoline","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/Gasoline/index.htm","hasChild":false},
{"label":"Glues or Adhesives","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/GluesAdhesives/index.htm","hasChild":false},
{"label":"Hobby Chemicals","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/HobbyChemicals/index.htm","hasChild":false},
{"label":"Latex Paint","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/Paint--Latex/index.htm","hasChild":false},
{"label":"Motor Oil","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/MotorOil/index.htm","hasChild":false},
{"label":"Oil-Based Paint","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/Paint--Oil-Based/index.htm","hasChild":false},
{"label":"Pool or Spa Chemicals","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/PoolSpaChemicals/index.htm","hasChild":false},
{"label":"Solvents","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/LiquidsHouseholdSupplies/Solvents/index.htm","hasChild":false},
{"label":"Medicines","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Medicine/index.htm","hasChild":false},
{"label":"Motor Oil Containers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/MotorOilContainers/index.htm","hasChild":false},
{"label":"Needles or Syringes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/NeedlesSyringes/index.htm","hasChild":false},
{"label":"Oil Filters","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/OilFilters/index.htm","hasChild":false},
{"label":"Oil Tanks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/OilTanks/index.htm","hasChild":false},
{"label":"Pesticides","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/Pesticides/index.htm","hasChild":false},
{"label":"Toner or Printer Cartridges","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/PrinterCartridgesToner/index.htm","hasChild":false},
{"label":"Smoke Detectors","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/SmokeDetectors/index.htm","hasChild":false},
{"label":"Thermometers or Mercury Items","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/HazardousItems/MercuryThermometersItems/index.htm","hasChild":false},
{"label":"Metal & Metal Items","value":"","hasChild":true},
{"label":"Appliances","value":"","hasChild":true},
{"label":"Air Conditioners or Heat Pumps","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Appliances/AirConditionersHeatPumps/index.htm","hasChild":false},
{"label":"Blenders","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Appliances/Blenders/index.htm","hasChild":false},
{"label":"Food Processors","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Appliances/FoodProcessors/index.htm","hasChild":false},
{"label":"Mixers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Appliances/Mixers/index.htm","hasChild":false},
{"label":"Other Large Appliances","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Appliances/OtherLargeAppliances/index.htm","hasChild":false},
{"label":"Refrigerators or Freezers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Appliances/RefrigeratorsFreezers/index.htm","hasChild":false},
{"label":"Stoves","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Appliances/Stoves/index.htm","hasChild":false},
{"label":"Toasters","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Appliances/Toasters/index.htm","hasChild":false},
{"label":"Washers or Dryers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Appliances/WashersDryers/index.htm","hasChild":false},
{"label":"Water Heaters","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Appliances/WaterHeaters/index.htm","hasChild":false},
{"label":"Barrels or Drums","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/BarrelsDrums/index.htm","hasChild":false},
{"label":"Batteries","value":"","hasChild":true},
{"label":"Camera or Watch Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Batteries/CameraWatchBatteries/index.htm","hasChild":false},
{"label":"Computer Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Batteries/ComputerBatteries/index.htm","hasChild":false},
{"label":"Cell Phone Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Batteries/CellPhoneBatteries/index.htm","hasChild":false},
{"label":"Hearing Aid Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Batteries/HearingAidBatteries/index.htm","hasChild":false},
{"label":"Lithium Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Batteries/Lithium/index.htm","hasChild":false},
{"label":"Alkaline Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Batteries/AlkalineBatteries/index.htm","hasChild":false},
{"label":"Rechargeable Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Batteries/RechargeableBatteries/index.htm","hasChild":false},
{"label":"Rechargeable Appliances","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Batteries/RechargeableAppliances/index.htm","hasChild":false},
{"label":"Car or Lead-Acid Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Batteries/CarLead-AcidBatteries/index.htm","hasChild":false},
{"label":"Bicycles or Bike Parts","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/BicyclesBikeParts/index.htm","hasChild":false},
{"label":"Cans","value":"","hasChild":true},
{"label":"Aerosol Cans","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Cans/AerosolCans/index.htm","hasChild":false},
{"label":"Beverage Cans","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Cans/BeverageCans/index.htm","hasChild":false},
{"label":"Can Lids","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Cans/CanLids/index.htm","hasChild":false},
{"label":"Paint Cans","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Cans/PaintCans/index.htm","hasChild":false},
{"label":"Steel or Tin Cans","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/Cans/SteelTinCans/index.htm","hasChild":false},
{"label":"Compressed Gas Containers","value":"","hasChild":true},
{"label":"Aerosol Cans","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/CompressedGasContainers/AerosolCans/index.htm","hasChild":false},
{"label":"CO2 Chargers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/CompressedGasContainers/CO2Chargers/index.htm","hasChild":false},
{"label":"Fire Extinguishers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/CompressedGasContainers/FireExtinguishers/index.htm","hasChild":false},
{"label":"Helium Tanks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/CompressedGasContainers/HeliumTanks/index.htm","hasChild":false},
{"label":"Oxygen and Acetylene Tanks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/CompressedGasContainers/OxygenAcetyleneTanks/index.htm","hasChild":false},
{"label":"Propane Tanks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/CompressedGasContainers/PropaneTanks/index.htm","hasChild":false},
{"label":"Small Gas Canisters","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/CompressedGasContainers/GasCanistersSmall/index.htm","hasChild":false},
{"label":"From the Kitchen","value":"","hasChild":true},
{"label":"Baking Trays or Cookie Sheets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/BakingTraysCookieSheets/index.htm","hasChild":false},
{"label":"Cookie Tins","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/CookieTins/index.htm","hasChild":false},
{"label":"Foil Pie Pans","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/FoilPiePans/index.htm","hasChild":false},
{"label":"Jar Lids","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/JarLids/index.htm","hasChild":false},
{"label":"Microwaves","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/Microwaves/index.htm","hasChild":false},
{"label":"Pots or Pans","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/PotsPans/index.htm","hasChild":false},
{"label":"Silverware","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/Silverware/index.htm","hasChild":false},
{"label":"Small Appliances","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/SmallAppliances/index.htm","hasChild":false},
{"label":"Wine Bottle Foil ","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/WineBottleFoil/index.htm","hasChild":false},
{"label":"Aluminum Foil","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/FromtheKitchen/AluminumFoil/index.htm","hasChild":false},
{"label":"Hand Tools","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/HandTools/index.htm","hasChild":false},
{"label":"Jewelry or Coins","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/JewelryCoins/index.htm","hasChild":false},
{"label":"Lawn Mowers or Power Equipment","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/LawnMowersPowerEquipment/index.htm","hasChild":false},
{"label":"License Plates","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/LicensePlates/index.htm","hasChild":false},
{"label":"Metals by Type","value":"","hasChild":true},
{"label":"Aluminum","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/Aluminum/index.htm","hasChild":false},
{"label":"Cast Iron","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/CastIron/index.htm","hasChild":false},
{"label":"Copper, Bronze, or Brass","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/CopperBronzeBrass/index.htm","hasChild":false},
{"label":"Gold, Silver and Precious Metals","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/GoldSilverEtc/index.htm","hasChild":false},
{"label":"Iron or Steel","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/IronSteel/index.htm","hasChild":false},
{"label":"Lead","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/Lead/index.htm","hasChild":false},
{"label":"Scrap Metal","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/ScrapMetal/index.htm","hasChild":false},
{"label":"Stainless Steel","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/MetalsbyType/StainlessSteel/index.htm","hasChild":false},
{"label":"Small Metal Items","value":"","hasChild":true},
{"label":"Keys","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/SmallMetalItems/Keys/index.htm","hasChild":false},
{"label":"Screws, Nails, Nuts or Bolts","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/SmallMetalItems/ScrewsNailsNutsBolts/index.htm","hasChild":false},
{"label":"Window Blinds","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/WindowBlinds/index.htm","hasChild":false},
{"label":"Wire Clothes Hangers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/WireClothesHangers/index.htm","hasChild":false},
{"label":"Wire or Cable","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/MetalandMetalItems/WireCable/index.htm","hasChild":false},
{"label":"Paper","value":"","hasChild":true},
{"label":"Cardboard","value":"","hasChild":true},
{"label":"Cardboard Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Cardboard/CardboardBoxes/index.htm","hasChild":false},
{"label":"Corrugated Cardboard","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Cardboard/CardboardCorrugated/index.htm","hasChild":false},
{"label":"Foamcore","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Cardboard/Foamcore/index.htm","hasChild":false},
{"label":"Soiled or Greasy Cardboard","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Cardboard/CardboardSoiledorGreasy/index.htm","hasChild":false},
{"label":"Waxed Cardboard","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Cardboard/CardboardWaxed/index.htm","hasChild":false},
{"label":"Containers / Boxes / Cartons","value":"","hasChild":true},
{"label":"Butter Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/ButterBoxes/index.htm","hasChild":false},
{"label":"Cereal or Cracker Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/CerealCrackerBoxes/index.htm","hasChild":false},
{"label":"Food Box Liners","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/FoodBoxLiners/index.htm","hasChild":false},
{"label":"Ice Cream Cartons","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/IceCreamCartons/index.htm","hasChild":false},
{"label":"Laundry Detergent Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/LaundryDetergentBoxes/index.htm","hasChild":false},
{"label":"Milk, Juice, or Soup Cartons","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/MilkJuiceCartons/index.htm","hasChild":false},
{"label":"Paper Berry Baskets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/PaperBerryBaskets/index.htm","hasChild":false},
{"label":"Paper Cups or Coffee Cups","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/PaperCupsCoffeeCups/index.htm","hasChild":false},
{"label":"Paper Egg Cartons","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/PaperEggCartons/index.htm","hasChild":false},
{"label":"Pizza Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/PizzaBoxes/index.htm","hasChild":false},
{"label":"Take-Out Containers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/Take-OutContainers/index.htm","hasChild":false},
{"label":"Tissue Boxes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/ContainersBoxesCartons/TissueBoxes/index.htm","hasChild":false},
{"label":"Food-soiled Paper","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Food-soiledPaper/index.htm","hasChild":false},
{"label":"Misc. Paper","value":"","hasChild":true},
{"label":"Envelopes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/Envelopes/index.htm","hasChild":false},
{"label":"Facial Tissue (Kleenex)","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/FacialTissue/index.htm","hasChild":false},
{"label":"Flushable Wipes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/FlushableWipes/index.htm","hasChild":false},
{"label":"Gift Wrap","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/GiftWrap/index.htm","hasChild":false},
{"label":"Napkins","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/Napkins/index.htm","hasChild":false},
{"label":"Paper Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/PaperBags/index.htm","hasChild":false},
{"label":"Paper Plates or Cups","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/PaperPlatesCups/index.htm","hasChild":false},
{"label":"Paper Punch Holes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/PaperPunchHoles/index.htm","hasChild":false},
{"label":"Paper Towels","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/PaperTowels/index.htm","hasChild":false},
{"label":"Paper Towel Rolls","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/PaperTowelRolls/index.htm","hasChild":false},
{"label":"Pet Food Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/PetFoodBags/index.htm","hasChild":false},
{"label":"Receipts","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/Receipts/index.htm","hasChild":false},
{"label":"Shredded Paper","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/ShreddedPaper/index.htm","hasChild":false},
{"label":"Spiral Bound Notebooks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/Notebooks-SpiralBound/index.htm","hasChild":false},
{"label":"Waxed Paper","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/Misc.Paper/WaxedPaper/index.htm","hasChild":false},
{"label":"Paper, Printed / Reading","value":"","hasChild":true},
{"label":"Bubble Pack Envelopes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/EnvelopesBubblepack/index.htm","hasChild":false},
{"label":"Envelopes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/Envelopes/index.htm","hasChild":false},
{"label":"Greeting Cards","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/GreetingCards/index.htm","hasChild":false},
{"label":"Hardback Books","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/BooksHardback/index.htm","hasChild":false},
{"label":"Junk Mail","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/JunkMail/index.htm","hasChild":false},
{"label":"Magazines","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/Magazines/index.htm","hasChild":false},
{"label":"Newspapers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/Newspapers/index.htm","hasChild":false},
{"label":"Office Paper","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/OfficePaper/index.htm","hasChild":false},
{"label":"Paperback Books","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/BooksPaperback/index.htm","hasChild":false},
{"label":"Phone Books","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/PhoneBooks/index.htm","hasChild":false},
{"label":"Photographs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/Photographs/index.htm","hasChild":false},
{"label":"Receipts","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/Receipts/index.htm","hasChild":false},
{"label":"Spiral Bound Notebooks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/Notebooks-Spiralbound/index.htm","hasChild":false},
{"label":"Tyvek Envelopes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Paper/PaperPrintedReading/EnvelopesTyvek/index.htm","hasChild":false},
{"label":"Plastic","value":"","hasChild":true},
{"label":"Bags","value":"","hasChild":true},
{"label":"Bread Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Bags/BreadBags/index.htm","hasChild":false},
{"label":"Chip Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Bags/ChipBags/index.htm","hasChild":false},
{"label":"Dry Cleaner Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Bags/DryCleanerBags/index.htm","hasChild":false},
{"label":"Food Box Liners","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Bags/FoodBoxLiners/index.htm","hasChild":false},
{"label":"Grocery or Shopping Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Bags/GroceryBags/index.htm","hasChild":false},
{"label":"Newspaper Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Bags/NewspaperBags/index.htm","hasChild":false},
{"label":"Produce Bags or Bulk Food Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Bags/ProduceBulkFoodBags/index.htm","hasChild":false},
{"label":"Reusable Shopping Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Bags/ReusableShoppingBags/index.htm","hasChild":false},
{"label":"Ziploc Bags","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Bags/ZiplocBags/index.htm","hasChild":false},
{"label":"Recycle Numbers 1-7","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/WithRecycleNumbers/index.htm","hasChild":false},
{"label":"Food & Beverage Containers","value":"","hasChild":true},
{"label":"6-pack Plastic Rings ","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/6-packPlasticRings/index.htm","hasChild":false},
{"label":"Blister Packages","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/BlisterPackages/index.htm","hasChild":false},
{"label":"Clamshell Containers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/ClamshellContainers/index.htm","hasChild":false},
{"label":"Foam Egg Cartons","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/FoamEggCartons/index.htm","hasChild":false},
{"label":"Meat or Food Trays","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/MeatFoodTrays/index.htm","hasChild":false},
{"label":"Peanut Butter or Mayonnaise Jars","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PeanutButterMayonnaiseJars/index.htm","hasChild":false},
{"label":"Plastic Berry Baskets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/BerryBaskets/index.htm","hasChild":false},
{"label":"Plastic Berry Trays","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/BerryTrays/index.htm","hasChild":false},
{"label":"Plastic Cups or Utensils","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PlasticCupsUtensils/index.htm","hasChild":false},
{"label":"Plastic Lids","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PlasticLids/index.htm","hasChild":false},
{"label":"Plastic Milk or Juice Jugs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PlasticMilkJuiceJug/index.htm","hasChild":false},
{"label":"Plastic Water or Soda Bottles","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PlasticBottlesWaterSoda/index.htm","hasChild":false},
{"label":"Margarine Tubs, Yogurt Tubs, Etc.","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/TubsMargarineYogurt/index.htm","hasChild":false},
{"label":"Tupperware","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/Tupperware/index.htm","hasChild":false},
{"label":"Plastic Food Tubs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/FoodBeverageContainers/PlasticTubs/index.htm","hasChild":false},
{"label":"Mail Packaging","value":"","hasChild":true},
{"label":"Biodegradable Foam Peanuts","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/MailPackaging/BiodegradableFoamPeanuts/index.htm","hasChild":false},
{"label":"Bubble Wrap","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/MailPackaging/BubbleWrap/index.htm","hasChild":false},
{"label":"Bubble Pack Envelopes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/MailPackaging/EnvelopesBubblepack/index.htm","hasChild":false},
{"label":"Packing Peanuts","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/MailPackaging/PackingPeanuts/index.htm","hasChild":false},
{"label":"Packing Sheets or Styrofoam Blocks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/MailPackaging/FoamBlocksPackingSheets/index.htm","hasChild":false},
{"label":"Tyvek Envelopes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/MailPackaging/EnvelopesTyvek/index.htm","hasChild":false},
{"label":"Misc. Plastic","value":"","hasChild":true},
{"label":"6-pack Plastic Rings ","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/6-packPlasticRings/index.htm","hasChild":false},
{"label":"Biodegradable Foam Peanuts","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/BiodegradableFoamPeanuts/index.htm","hasChild":false},
{"label":"Blister Packages","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/BlisterPackages/index.htm","hasChild":false},
{"label":"Bottle Caps","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/BottleCaps/index.htm","hasChild":false},
{"label":"Bubble Wrap","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/BubbleWrap/index.htm","hasChild":false},
{"label":"CD or DVD Cases","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/CDCases/index.htm","hasChild":false},
{"label":"CDs, DVDs, or Floppies","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/CDsDVDsFloppies/index.htm","hasChild":false},
{"label":"Plastic Clothes Hangers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/PlasticClothesHangers/index.htm","hasChild":false},
{"label":"Corks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/Corks/index.htm","hasChild":false},
{"label":"Eyeglass Frames","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/EyeglassFrames/index.htm","hasChild":false},
{"label":"Plant Pots","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/PlantPots/index.htm","hasChild":false},
{"label":"Plastic without Recycle Symbol","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/PlasticNoRecycleSymbol/index.htm","hasChild":false},
{"label":"Plastic Outdoor Furniture","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/PlasticOutdoorFurniture/index.htm","hasChild":false},
{"label":"Printer Cartridges","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/PrinterCartridges/index.htm","hasChild":false},
{"label":"Shrink Wrap","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/ShrinkWrap/index.htm","hasChild":false},
{"label":"Tarps","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/Tarps/index.htm","hasChild":false},
{"label":"Toys or Sporting Goods","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Misc.Plastic/ToysSportingGoods/index.htm","hasChild":false},
{"label":"Non-Food Containers","value":"","hasChild":true},
{"label":"Blister Packages","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/BlisterPackages/index.htm","hasChild":false},
{"label":"Bottle Caps","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/BottleCaps/index.htm","hasChild":false},
{"label":"Buckets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/Buckets/index.htm","hasChild":false},
{"label":"Laundry Detergent Jugs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/LaundryDetergentJugs/index.htm","hasChild":false},
{"label":"Medicine Bottles - Over the Counter","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/MedicineBottles/index.htm","hasChild":false},
{"label":"Pesticide Containers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/PesticideContainers/index.htm","hasChild":false},
{"label":"Plastic Bottles","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/PlasticBottles/index.htm","hasChild":false},
{"label":"Plastic Jugs","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/PlasticJugs/index.htm","hasChild":false},
{"label":"Prescription Drug Bottles","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/PrescriptionDrugContainers/index.htm","hasChild":false},
{"label":"Shampoo or Lotion Bottles","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/ShampooLotionBottles/index.htm","hasChild":false},
{"label":"Vitamin Bottles","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Non-FoodContainers/VitaminBottles/index.htm","hasChild":false},
{"label":"Straws","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Straws/index.htm","hasChild":false},
{"label":"Styrofoam","value":"","hasChild":true},
{"label":"Foam Egg Cartons","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/FoamEggCartons/index.htm","hasChild":false},
{"label":"Foam Packing Sheets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/FoamPackingSheets/index.htm","hasChild":false},
{"label":"Meat or Food Trays","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/MeatFoodTrays/index.htm","hasChild":false},
{"label":"Packing Peanuts","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/PackingPeanuts/index.htm","hasChild":false},
{"label":"Styrofoam Blocks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/StyrofoamBlocks/index.htm","hasChild":false},
{"label":"Styrofoam Cups","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/StyrofoamCupsUtensils/index.htm","hasChild":false},
{"label":"Take-Out Containers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Plastic/Styrofoam/Take-OutContainers/index.htm","hasChild":false},
{"label":"Vehicles & Vehicle-Related","value":"","hasChild":true},
{"label":"Antifreeze","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/Anti-Freeze/index.htm","hasChild":false},
{"label":"Auto Glass","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/AutoGlass/index.htm","hasChild":false},
{"label":"Bicycles or Bike Parts","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/BicyclesBikeParts/index.htm","hasChild":false},
{"label":"Brake or Transmission Fluid","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/BrakeTransmissionFluid/index.htm","hasChild":false},
{"label":"Car Batteries","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/VehicleBatteries/index.htm","hasChild":false},
{"label":"Child Car Seats","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/ChildCarSeats/index.htm","hasChild":false},
{"label":"Engines, Motors or Car Parts","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm","hasChild":false},
{"label":"Flares","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/Flares/index.htm","hasChild":false},
{"label":"Gas Cans","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/GasCans/index.htm","hasChild":false},
{"label":"Gasoline","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/Gasoline/index.htm","hasChild":false},
{"label":"Lawn Mowers or Power Equipment","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/LawnMowersPowerEquipment/index.htm","hasChild":false},
{"label":"License Plates","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/LicensePlates/index.htm","hasChild":false},
{"label":"Motor Oil","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/MotorOil/index.htm","hasChild":false},
{"label":"Motor Oil Containers","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/MotorOilContainers/index.htm","hasChild":false},
{"label":"Motor Oil Filters","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/MotorOilFilters/index.htm","hasChild":false},
{"label":"Other Vehicle Fluids","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/OtherVehicleFluids/index.htm","hasChild":false},
{"label":"Tires","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/Tires/index.htm","hasChild":false},
{"label":"Vehicles","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/Vehicles/index.htm","hasChild":false},
{"label":"Starters, Carburetors, Etc.","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/VehiclesVehicle-related/AutoParts/index.htm","hasChild":false},
{"label":"Wood","value":"","hasChild":true},
{"label":"Christmas Trees","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/ChristmasTrees/index.htm","hasChild":false},
{"label":"Clean Wood Waste","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/WoodWasteClean/index.htm","hasChild":false},
{"label":"Corks","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/Corks/index.htm","hasChild":false},
{"label":"Fireplace or Briquette Ashes","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/Ashes/index.htm","hasChild":false},
{"label":"Painted or Treated Wood","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/PaintedTreatedWood/index.htm","hasChild":false},
{"label":"Pallets","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/Pallets/index.htm","hasChild":false},
{"label":"Reusable Lumber","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/ReusableLumber/index.htm","hasChild":false},
{"label":"Wood Scraps, Shavings, or Sawdust","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/Wood/WoodScrapsShavings/index.htm","hasChild":false},
{"label":"Yard Waste ","value":"","hasChild":true},
{"label":"Christmas Trees","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/ChristmasTrees/index.htm","hasChild":false},
{"label":"Contaminated Dirt or Soil","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/ContaminatedSoil/index.htm","hasChild":false},
{"label":"Dirt or Soil","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/DirtSoil/index.htm","hasChild":false},
{"label":"Grass Clippings or Sod","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/GrassClipingsSod/index.htm","hasChild":false},
{"label":"House Plants","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/HousePlants/index.htm","hasChild":false},
{"label":"Leaves or Non-Woody Yard Waste","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/LeavesNon-WoodyYardwaste/index.htm","hasChild":false},
{"label":"Pet Waste or Litter","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/PetWasteLitter/index.htm","hasChild":false},
{"label":"Plant or Tree Salvage","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/PlantsTreeSalvage/index.htm","hasChild":false},
{"label":"Plant Pots","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/PlantPots/index.htm","hasChild":false},
{"label":"Rocks or Gravel","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/RocksGravel/index.htm","hasChild":false},
{"label":"Trees or Brush","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/TreesBrush/index.htm","hasChild":false},
{"label":"Wood Scraps, Shavings, or Sawdust","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/YardWaste/WoodScrapsShavings/index.htm","hasChild":false},
{"label":"A-Z","value":"/Seattle_Public_Utilities/MyServices/WhereDoesItGo/A-Z/index.htm","hasChild":false}
]
// This tree implementation is originally from https://github.com/benoitvallon/computer-science-in-javascript . Added and trimmed where necessary
function Node(data) {
  this.data = data;
  this.children = [];
  //added a parent connector
  // this.parent = null;
}

function Tree() {
  this.root = null;
}

Tree.prototype.add = function(data, toNodeData) {
  var node = new Node(data);
  var parent = toNodeData ? this.findBFS(toNodeData) : null;
  // node.parent = parent;
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

  recycleArray.forEach(branchInfo => {
  	if(!branchInfo.hasChild){
	    branchInfo.value.forEach((branchName, index) => {
	      if(!recycleTree.contains(branchName)){
	      	var parentNode = branchInfo.value[index-1] || "rootNode"
		    recycleTree.add(branchName, parentNode)
	      }
	    })
	}
    //add the leafs
    // recycleTree.add(branchInfo.label, branchInfo.value[branchInfo.value.length-1])
  })
  return recycleTree
}

var recycleTree = createRecycleTree(nodeList);