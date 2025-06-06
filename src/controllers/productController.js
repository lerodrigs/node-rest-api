const Product = require('../models/product');

// @desc    Buscar todos os produtos
// @route   GET /api/produtos
// @access  Public
exports.getProducts = async (req, res) => {
  try {
    const produtos = await Product.find();
    res.status(200).json({ success: true, count: produtos.length, data: produtos });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Erro no servidor' });
  }
};

// @desc    Buscar um produto
// @route   GET /api/produtos/:id
// @access  Public
exports.getProduct = async (req, res) => {
  try {
    const produto = await Product.findById(req.params.id);
    
    if (!produto) {
      return res.status(404).json({ success: false, error: 'Produto não encontrado' });
    }
    
    res.status(200).json({ success: true, data: produto });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Erro no servidor' });
  }
};

// @desc    Create product
// @route   POST /api/products
// @access  Public
exports.createProduct = async (req, res) => {
  try {
    const produto = await Product.create(req.body);
    res.status(201).json({ success: true, data: produto });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Public
exports.updateProduct = async (req, res) => {
  try {
    const produto = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!produto) {
      return res.status(404).json({ success: false, error: 'Produto não encontrado' });
    }
    
    res.status(200).json({ success: true, data: produto });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Public
exports.deleteProduct = async (req, res) => {
  try {
    const produto = await Product.findByIdAndDelete(req.params.id);
    
    if (!produto) {
      return res.status(404).json({ success: false, error: 'Produto não encontrado' });
    }
    
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Erro no servidor' });
  }
};