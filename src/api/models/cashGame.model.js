const mongoose = require('mongoose');

const limitTypes = ['no_limit', 'pot_limit', 'limit'];

/**
 * Cash Game Schema
 * @private
 */
const cashGameSchema = new mongoose.Schema(
  {
    gameType: {
      type: String,
      required: true,
      trim: true,
    },
    stakes: {
      type: String,
      required: true,
      trim: true,
    },
    limitType: {
      type: String,
      enum: limitTypes,
      default: 'no_limit',
    },
    location: {
      type: String,
      required: true,
    },
    buyIn: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

exports.schema = cashGameSchema;
