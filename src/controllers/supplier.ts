import SupplierModel from "../models/SupplierModel"


const getSuppliers = async (_req: any, res: any) => {
  // const { pageSize, page } = req.query;

  try {
    // const skip = (page - 1) * pageSize;

    const items = await SupplierModel.find({})
    // .skip(skip)
    // .limit(pageSize);

    // const total = await SupplierModel.countDocuments();

    res.status(200).json({
      message: 'Products',
      data: items
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};
const addNew = async (req: any, res: any) => {
  const body = req.body;
  try {
    const newSupplier = new SupplierModel(body);
    newSupplier.save();

    res.status(200).json({
      message: 'Add new supplier successfully!!!',
      data: newSupplier,
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export { addNew, getSuppliers }