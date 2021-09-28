import mushroom from "mushroomjs";

const rootApiUrl = "http://viettoc-api.test2.siten.vn/api/viettoc/v1/";

mushroom._defineAsyncResource({
  name: "ldp_cau_hinh",
  actions: {
    findMany: { clientCache: true },
    findById: { clientCache: true },
    createOne: {},
    updatePartially: {},
    deleteOne: {},
    deleteMany: {},
  },
  views: {},
});

mushroom._defineAsyncResource({
  name: "ldp_slide",
  actions: {
    findMany: { clientCache: true },
    findById: { clientCache: true },
    createOne: {},
    updatePartially: {},
    deleteOne: {},
    deleteMany: {},
  },
  views: {},
});
mushroom._defineAsyncResource({
  name: "ldp_danh_gia",
  actions: {
    findMany: { clientCache: true },
    findById: { clientCache: true },
    createOne: {},
    updatePartially: {},
    deleteOne: {},
    deleteMany: {},
  },
  views: {},
});
mushroom._defineAsyncResource({
  name: "ldp_loi_nhan",
  actions: {
    findMany: { clientCache: true },
    findById: { clientCache: true },
    createOne: {},
    deleteOne: {},
    deleteMany: {},
  },
  views: {},
});
mushroom._defineAsyncResource({
  name: "quoc_gia",
  actions: { findMany: { clientCache: true }, findById: { clientCache: true } },
  views: {},
});
mushroom._defineAsyncResource({
  name: "province",
  actions: { findMany: { clientCache: true }, findById: { clientCache: true } },
  views: {},
});
mushroom._defineAsyncResource({
  name: "district",
  actions: { findMany: { clientCache: true }, findById: { clientCache: true } },
  views: {},
});
mushroom._defineAsyncResource({
  name: "commune",
  actions: { findMany: { clientCache: true }, findById: { clientCache: true } },
  views: {},
});

mushroom.$using(rootApiUrl);

const getProvider = async () => {
  const result = await mushroom.province.listAsync();
  console.log(result);
};

const getIntro = async () => {
  const response = await mushroom.ldp_cau_hinh.listAsync({
    ten: "content_gioi_thieu",
  });

  console.log(response);
};

const getIntroCount = async () => {
  const response = await mushroom.ldp_thong_ke?.views?.chi_so_phat_trien();

  console.log(response);
};

const getSlide = async () => {
  const slide = await mushroom.ldp_slide.listAsync();
  console.log({ slide });
};

const getTestimonial = async () => {
  const testimonial = await mushroom.ldp_danh_gia.listAsync();
  console.log({ testimonial });
};

const register = async () => {
  const register = await mushroom.dong_ho?.dangKyDongHoAsync({
    ten_dong_ho: "tên dòng họ",
    khoang_dinh: "khoảng đinh",
    tinh_id: "mã tỉnh",
    huyen_id: "mã huyện",
    xa_id: "mã xã",
    dia_chi: "địa chỉ",
    xung_ho: "xưng hô",
    ho_ten: "họ và tên",
    dien_thoai: "điện thoại",
    email: "email",
    recaptchaToken: "recaptcha token",
  });
  console.log(register);
};

const active = async () => {
  const active = await mushroom.nguoi_dung?.kichHoatTaiKhoanAsync({
    taiKhoan: "phone-number",
    ma: "activation-code",
    recaptchaToken: "recaptcha token",
  });
  console.log({ active });
};

const changePassword = async () => {
  const changePassword = await mushroom.nguoi_dung?.doiMatKhauAsync({
    matKhau: "new-password",
    token: "token",
  });
  console.log({ changePassword });
};

const sendMessage = async () => {
  const message = await mushroom.ldp_loi_nhan.createAsync({
    ho_ten: "họ và tên",
    email: "email",
    dien_thoai: "điện thoại",
    noi_dung: "nội dung",
    recaptchaToken: "recaptcha token",
  });

  console.log({ message });
};

export {
  getProvider,
  active,
  getIntro,
  sendMessage,
  changePassword,
  getIntroCount,
  getSlide,
  getTestimonial,
  register,
};
