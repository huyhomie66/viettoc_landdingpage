import mushroom from "mushroomjs";
import { rootApiUrl, keySite } from '../config'
import { load } from 'recaptcha-v3'

async function getToken() {
  const recaptcha = await load(keySite)


  const token = await recaptcha.execute('<action>')

  console.log(token) // Will also print the token
}

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

const getImages = async (ids = []) => {
  const result = await mushroom.$file?.zip(ids);
  return result
}

const getProvider = async () => {
  const result = await mushroom.province.listAsync();
  console.log(result);
};

const getIntro = async (name = '') => {
  const response = await mushroom.ldp_cau_hinh.listAsync({
    ten: name,
  });

  console.log(response);
};

const getIntroCount = async () => {
  const response = await mushroom.ldp_thong_ke?.views?.chi_so_phat_trien();
  console.log(response);
};

const getSlide = async () => {
  const slide = await mushroom.ldp_slide.listAsync();
  return slide
};

const getTestimonial = async () => {
  const testimonial = await mushroom.ldp_danh_gia.listAsync();
  console.log({ testimonial });
};

const register = async ({
  fullName = '',
  providerId = '',
  districtId = '',
  communeId = '',
  familyName = ' ',
  phone = '',
  address = '',
  vocative = ' ',
  recaptchaToken = '',
  distance = ' ',
  email = '',
}) => {
  const register = await mushroom.dong_ho?.dangKyDongHoAsync({
    ten_dong_ho: familyName,
    khoang_dinh: distance,
    tinh_id: providerId,
    huyen_id: districtId,
    xa_id: communeId,
    dia_chi: address,
    xung_ho: vocative,
    ho_ten: fullName,
    dien_thoai: phone,
    email,
    recaptchaToken,
  });
  console.log(register);
};

const active = async ({ phone, code, recaptchaToken }) => {
  const active = await mushroom.nguoi_dung?.kichHoatTaiKhoanAsync({
    taiKhoan: phone,
    ma: code,
    recaptchaToken,
  });
  console.log({ active });
};

const changePassword = async ({ password, token }) => {
  const changePassword = await mushroom.nguoi_dung?.doiMatKhauAsync({
    matKhau: password,
    token,
  });
  console.log({ changePassword });
};

const sendMessage = async ({ name, email, note, phone, recaptchaToken }) => {
  const message = await mushroom.ldp_loi_nhan.createAsync({
    ho_ten: name,
    email,
    dien_thoai: phone,
    noi_dung: note,
    recaptchaToken,
  });

  console.log({ message });
};

export {
  getProvider,
  active,
  getIntro,
  sendMessage,
  changePassword,
  getToken,
  getIntroCount,
  getSlide,
  getTestimonial,
  register,
  getImages,
};
