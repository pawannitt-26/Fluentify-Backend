// import expressAsyncHandler from "express-async-handler";
// import stripe from "../utils/stripe";
// import User from "../models/userModel";
// import Student from "../models/studentModel";

// const createCheckoutSession = expressAsyncHandler(async (req: any, res) => {
//   const userID = req.body.userID;
//   const priceID = req.body.priceID;
//   const sesh = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         price: priceID,
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: "",
//     cancel_url: "",
//     metadata: {
//       userID: userID,
//     },
//   });
//   res.redirect(303, sesh.url as string);
// });

// const spriteWebhook = expressAsyncHandler(async (req: any, res) => {
//   const event = req.body;

//   switch (event.type) {
//     case "checkout.session.completed":
//       const session = event.data.object;
//       const sessionMetadata = event.data.object.metadata;
//       const userDetails = await Student.findById(sessionMetadata.userID);
//       if (!userDetails) {
//         res.status(404).json({
//           status: "failed",
//           message: `unable to find user with userID ${sessionMetadata.userID}`,
//         });
//         return;
//       }
//       userDetails.credits += session.unit_amount;
//       await userDetails.save();
//       break;
//     case "checkout.session.cancelled":
//     case "checkout.session.expired":
//       res.status(400).json({
//         status: "failure",
//         message: "Payment expired or was cancelled by user",
//       });
//       break;
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }
// });

// // const createProduct = expressAsyncHandler(async (req: any, res) => {
// // //   const productName = req.body.name;
// // //   const product = await stripe.products.create({
// // //     name: productName,
// // //   });
// // //   if (!product) {
// // //     res.status(501).json({
// // //       status: "failure",
// // //       message: `Error creating product with courseName ${productName}`,
// // //     });
// // //     return;
// // //   }
// // //   res.status(201).json({
// // //     status: "success",
// // //     product,
// // //   });

// // });

// // const createPrice = expressAsyncHandler(async (req: any, res) => {
// // //   const { course, timeSlots, productID } = req.body;
// // //   const selectedCourse = await Courses.findById(course);
// // //   if (!selectedCourse || !selectedCourse.price || !selectedCourse.duration) {
// // //     res.status(404).json({
// // //       status: "failure",
// // //       message: `Error fetching course with courseID ${course}`,
// // //     });
// // //     return;
// // //   }
// // //   const numberOfSlots =
// // //     timeSlots.Monday.length +
// // //     timeSlots.Tuesday.length +
// // //     timeSlots.Wednesday.length +
// // //     timeSlots.Thursday.length +
// // //     timeSlots.Friday.length +
// // //     timeSlots.Saturday.length +
// // //     timeSlots.Sunday.length;

// // //   const productPrice = (selectedCourse.price *
// // //     4 *
// // //     numberOfSlots *
// // //     selectedCourse.duration) as number;

// // //   const price = await stripe.prices.create({
// // //     currency: "INR",
// // //     unit_amount: productPrice,
// // //     product: productID as string,
// // //   });

// // //   if (!price) {
// // //     res.status(501).json({
// // //       status: "failure",
// // //       message: `Error creating price with productID ${productID}`,
// // //     });
// // //     return;
// // //   }
// // //   res.status(201).json({
// // //     status: "success",
// // //     price,
// // //   });

// // });

// // const getProduct = expressAsyncHandler(async (req: any, res) => {
// //   const courseID = req.params._id;
// //   const courseFromDB = await Courses.findById(courseID);
// //   if (!courseFromDB) {
// //     res.status(404).json({
// //       status: "failure",
// //       message: `Error fetching course with courseID ${courseID}`,
// //     });
// //     return;
// //   }
// //   const course = await stripe.products.search({
// //     query: `name: ${courseFromDB.name}`,
// //   });
// //   if (!course) {
// //     res.status(404).json({
// //       status: "failure",
// //       message: `Error fetching product with courseID ${courseID}`,
// //     });
// //     return;
// //   }
// //   res.status(200).json({
// //     status: "success",
// //     course,
// //   });
// // });

// const getPrice = expressAsyncHandler(async (req: any, res) => {
//   const product = await stripe.products.search({
//     query: `name: Credits`,
//   });
//   if (!product) {
//     res.status(404).json({
//       status: "failure",
//       message: `Error fetching product with name "Credits". Check if basicInit is done?`,
//     });
//     return;
//   }
//   const price = await stripe.prices.search({
//     query: `product: ${product.data[0].id}`,
//   });
//   if (!price) {
//     res.status(404).json({
//       status: "failure",
//       message: `Error fetching price for Credits. Check if basicInit is done?`,
//     });
//     return;
//   }
//   res.status(200).json({
//     status: "success",
//     price,
//   });
// });

// export {
//   createCheckoutSession,
//   //   createPrice,
//   //   createProduct,
//   //   getProduct,
//   //   getPrice,
// };
