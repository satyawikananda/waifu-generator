const getWaifuName = (list) => {
  const randomNumber = Math.floor(Math.random() * list.length);
  const waifu = list[randomNumber];

  if (waifu.name) {
    const name = waifu.name.split(' ');
    return name[0] ? name[0] : getWaifuName(list);
  }

  return getWaifuName(list);
};

const getWaifuLastName = (list) => {
  const randomNumber = Math.floor(Math.random() * list.length);
  const waifu = list[randomNumber];

  if (waifu.name) {
    const name = waifu.name.split(' ');
    return name[1] ? name[1] : getWaifuLastName(list);
  }
};

const getWaifuFullName = (list) => {
  if (list.length === 0) {
    return 'Empty list.';
  } else {
    return getWaifuName(list) + ' ' + getWaifuLastName(list);
  }
};

export default {
  getWaifuName,
  getWaifuLastName,
  getWaifuFullName
}