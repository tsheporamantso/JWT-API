const login = async (req, res) => {
  res.status(200).json({ msg: 'login' });
};

const dashboard = async (req, res) => {
  res.status(200).json({ msg: 'dashboard' });
};

module.exports = {
  login,
  dashboard,
};
