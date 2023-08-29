import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  lang: { type: String, default: "en", required: true },
  theme: { type: String, default: "purple", required: true },
  font: { type: String, default: "nexa", required: true },
  general: {
    type: [
      {
        section: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
  introduction: {
    type: [
      {
        section: String,
        subject: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
  anatomy: {
    type: [
      {
        section: String,
        subject: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
  love: {
    type: [
      {
        section: String,
        subject: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
  happiness: {
    type: [
      {
        section: String,
        subject: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
  strength: {
    type: [
      {
        section: String,
        subject: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
  inspiration: {
    type: [
      {
        section: String,
        subject: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
  peace: {
    type: [
      {
        section: String,
        subject: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
  home: {
    type: [
      {
        section: String,
        subject: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
  where: {
    type: [
      {
        section: String,
        subject: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
  everything: {
    type: [
      {
        section: String,
        subject: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
  outro1: {
    type: [
      {
        section: String,
        subject: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
  outro2: {
    type: [
      {
        section: String,
        subject: String,
        note: String,
        creationDate: Number,
      },
    ],
    default: [],
    required: true,
  },
});

export const User = mongoose.model("User", UserSchema);
