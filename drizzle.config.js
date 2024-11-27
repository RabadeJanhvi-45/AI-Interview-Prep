/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-prep_owner:w7Qr5LgXBMOG@ep-steep-grass-a1yxr9bp.ap-southeast-1.aws.neon.tech/ai-interview-prep?sslmode=require',
    }
  };