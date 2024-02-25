import { User } from "../models/User.js";

export const storeNewNote = async (note) => {
  console.log("NewNote to be stored:", note);
  const user = await findUser();
  console.log("storeNewNote user:", user);
  switch (note.section) {
    case "general":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            general: user ? [...user.general, note] : [],
          },
        }
      );
      break;
    case "introduction":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            introduction: user ? [...user.introduction, note] : [],
          },
        }
      );
      break;
    case "anatomy":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            anatomy: user ? [...user.anatomy, note] : [],
          },
        }
      );
      break;
    case "love":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            love: user ? [...user.love, note] : [],
          },
        }
      );
      break;
    case "happiness":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            happiness: user ? [...user.happiness, note] : [],
          },
        }
      );
      break;
    case "strength":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            strength: user ? [...user.strength, note] : [],
          },
        }
      );
      break;
    case "inspiration":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            inspiration: user ? [...user.inspiration, note] : [],
          },
        }
      );
      break;
    case "peace":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            peace: user ? [...user.peace, note] : [],
          },
        }
      );
      break;
    case "home":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            home: user ? [...user.home, note] : [],
          },
        }
      );
      break;
    case "where":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            where: user ? [...user.where, note] : [],
          },
        }
      );
      break;
    case "everything":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            everything: user ? [...user.everything, note] : [],
          },
        }
      );
      break;
    case "outro1":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            outro1: user ? [...user.outro1, note] : [],
          },
        }
      );
      break;
    case "outro2":
      await User.findOneAndUpdate(
        {
          username: "alina.ranok",
        },
        {
          $set: {
            outro2: user ? [...user.outro2, note] : [],
          },
        }
      );
      break;
    default:
      return null;
  }
  return true;
};

export const getSectionNotes = async (section) => {
  console.log("Section to get:", section);
  const user = await findUser();
  switch (section) {
    case "general":
      return user?.general;
    case "introduction":
      return user?.introduction;
    case "anatomy":
      return user?.anatomy;
    case "love":
      return user?.love;
    case "happiness":
      return user?.happiness;
    case "strength":
      return user?.strength;
    case "inspiration":
      return user?.inspiration;
    case "peace":
      return user?.peace;
    case "home":
      return user?.home;
    case "where":
      return user?.where;
    case "everything":
      return user?.everything;
    case "outro1":
      return user?.outro1;
    case "outro2":
      return user?.outro2;
    default:
      return null;
  }
};

export const getAllNotes = async () => {
  const user = await findUser();
  const allNotes = {
    general: user?.general,
    introduction: user?.introduction,
    anatomy: user?.anatomy,
    love: user?.love,
    happiness: user?.happiness,
    strength: user?.strength,
    inspiration: user?.inspiration,
    peace: user?.peace,
    home: user?.home,
    where: user?.where,
    everything: user?.everything,
    outro1: user?.outro1,
    outro2: user?.outro2,
  };
  return allNotes;
};

export const getSettings = async () => {
  const user = await findUser();
  const settings = {
    lang: user ? user.lang : "en",
    theme: user ? user.theme : "purple",
    font: user ? user.font : "nexa",
    book: user ? user.book : "My External Cause",
  };
  return settings;
};

export const putSettings = async (settings) => {
  await findUser();
  const result = await User.findOneAndUpdate(
    {
      username: "alina.ranok",
    },
    {
      $set: {
        lang: settings.lang,
        theme: settings.theme,
        font: settings.font,
        book: settings.book ? settings.book : "My External Cause",
      },
    }
  );
  console.log("result is:", result);
  return !!result;
};

export const saveLang = async (lang) => {
  await findUser();
  const result = await User.findOneAndUpdate(
    {
      username: "alina.ranok",
    },
    {
      $set: {
        lang: lang,
      },
    }
  );
  return !!result;
};

export const saveTheme = async (theme) => {
  await findUser();
  const result = await User.findOneAndUpdate(
    {
      username: "alina.ranok",
    },
    {
      $set: {
        theme: theme,
      },
    }
  );
  return !!result;
};

export const saveFont = async (font) => {
  await findUser();
  const result = await User.findOneAndUpdate(
    {
      username: "alina.ranok",
    },
    {
      $set: {
        font: font,
      },
    }
  );
  return !!result;
};

export const saveBook = async (book) => {
  await findUser();
  const result = await User.findOneAndUpdate(
    {
      username: "alina.ranok",
    },
    {
      $set: {
        book: book,
      },
    }
  );
  return !!result;
};

export const findUser = async () => {
  let user = await User.findOne({
    username: "alina.ranok",
  });
  if (!user) {
    user = await createUser("alina.ranok");
  }
  return user;
};

export const createUser = async (user) => {
  const userInfo = {
    username: user,
    notes: [],
  };
  const newUser = new User(userInfo);
  await newUser.save();
  const fetchedUser = await User.findOne({
    username: user,
  });
  return fetchedUser;
};
