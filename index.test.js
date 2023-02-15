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
    const testRestaurant2 = seedRestaurant[1];
    const findRestaurant = await Restaurant.findAll({
      where: { name: "LittleSheep" },
    });
    expect(findRestaurant).toEqual(testRestaurant2);
  });

  test("can find Menus", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });

  test("can delete Restaurants", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });
});
