const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Por favor adicione um nome'],
    trim: true,
    maxlength: [100, 'Nome não pode ter mais que 100 caracteres']
  },
  preco: {
    type: Number,
    required: [true, 'Por favor adicione um preço'],
    min: [0, 'Preço não pode ser negativo']
  },
  descricao: {
    type: String,
    maxlength: [500, 'Descrição não pode ter mais que 500 caracteres']
  },
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);