const { where } = require("sequelize");
const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Restaurant", async () => {
    // TODO - write test
    const testRestaurant = seedRestaurant[0];
    expect(testRestaurant.name).toEqual("AppleBees");
  });

  test("can create a Menu", async () => {
    // TODO - write test
    const testMenu = seedMenu[0];
    expect(testMenu.title).toEqual("Breakfast");
  });

  test("can find Restaurants", async () => {
    // TODO - write test
    const testRestaurant2 = await Restaurant.create(seedRestaurant[1]);
    const findRestaurant = await Restaurant.findOne({
      where: { name: "LittleSheep" },
    });
    expect(findRestaurant.name).toContain(testRestaurant2.name);
  });

  test("can find Menus", async () => {
    // TODO - write test
    const testMenu2 = await Menu.create(seedMenu[1]);
    const findMenu = await Menu.findOne({
      where: { title: "Lunch" },
    });
    expect(findMenu.title).toContain(testMenu2.title);
  });

  test("can delete Restaurants", async () => {
    // TODO - write test
    const testRestaurant3 = await Restaurant.create(seedRestaurant[2]);
    const destroyRestaurant = await testRestaurant3.destroy();
    expect().toEqual();
  });
});
