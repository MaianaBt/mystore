const log = require("../middlewares/services/log.service");
const service = require("../middlewares/services/shoppingCart.service");

const create = async (req, res) => {
  try {
    const result = await service.create(req.body);

    return res.json(result);
  } catch (e) {
    console.log(e);

    log.error("Erro ao registrar", "", e.message || e.msg);
    res.status(500);
    res.json({ msg: "Erro ao registrar. " + (e.message || e.msg) });
  }
};

const getById = async (req, res) => {
  try {
    const result = await service.getById(req.params.id);
    if (!result)
      return res.status(404).json({ error: "Produto não está cadastrado" });

    return res.json(result);
  } catch (e) {
    log.error("Erro ao obter carrinho. ", "", e.message || e.msg);
    res.status(500);
    res.json({ msg: "Erro ao obter carrinho. " + (e.message || e.msg) });
  }
};
const getAll = async (req, res) => {
  try {
    const result = await service.getAll();

    return res.json(result);
  } catch (e) {
    log.error("Erro ao obter produtos. ", "", e.message || e.msg);
    res.status(500);
    res.json({ msg: "Erro ao obter produtos. " + (e.message || e.msg) });
  }
};

const edit = async (req, res) => {
  try {
    const result = await service.edit(req.body);

    return res.json(result);
  } catch (e) {
    log.error("Erro ao editar. ", "", e.message || e.msg);
    res.status(500);
    res.json({ msg: "Erro ao editar. " + (e.message || e.msg) });
  }
};

const addProduct = async (req, res) => {
  try {
    const cartId = req.params.id;
    const params = {
      ...req.body,
      cartId,
    };
    const result = await service.addProduct(params);

    return res.json(result);
  } catch (e) {
    log.error("Erro ao adicionar produto. ", "", e.message || e.msg);
    res.status(500);
    res.json({ msg: "Erro ao adicionar produto. " + (e.message || e.msg) });
  }
};

const removeProduct = async (req, res) => {
  try {
    const cartId = req.params.id;
    const productId = req.params.productId;
    const result = await service.removeProduct({ cartId, productId });

    return res.json(result);
  } catch (e) {
    log.error("Erro ao remover produto. ", "", e.message || e.msg);
    res.status(500);
    res.json({ msg: "Erro ao remover produto. " + (e.message || e.msg) });
  }
};

const editProduct = async (req, res) => {
  try {
    const cartId = req.params.id;
    const { productId } = req.params;
    const { quantity } = req.body;

    const result = await service.editProduct({
      cartId,
      productId,
      quantity,
    });

    return res.json(result);
  } catch (e) {
    log.error("Erro ao editar produto. ", "", e.message || e.msg);
    res.status(500);
    res.json({ msg: "Erro ao editar produto. " + (e.message || e.msg) });
  }
};

module.exports = {
  create,
  getById,
  getAll,
  edit,
  addProduct,
  removeProduct,
  editProduct,
};
