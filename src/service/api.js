import mushroom from "mushroomjs";
import mushroomFile from "mushroomjs-file";
import { rootApiUrl, keySite } from "../config";
import { load } from "recaptcha-v3";

async function getToken() {
  const recaptcha = await load(keySite);

  const token = await recaptcha.execute("<action>");

  console.log(token); // Will also print the token
}

function init(provider) {
  provider._defineAsyncResource({
    name: "dong_ho",
    actions: { _raw_http_method_dangKyDongHo: {} },
    views: {},
  });
  provider._defineAsyncResource({
    name: "nguoi_dung",
    actions: {
      _raw_http_method_kichHoatTaiKhoan: {},
      _raw_http_method_doiMatKhau: {},
    },
    views: {},
  });
  provider._defineAsyncResource({
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
  provider._defineAsyncResource({
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
  provider._defineAsyncResource({
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
  provider._defineAsyncResource({
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
  provider._defineAsyncResource({
    name: "ldp_thong_ke",
    actions: {},
    views: { chi_so_phat_trien: {} },
  });
  provider._defineAsyncResource({
    name: "quoc_gia",
    actions: {
      findMany: { clientCache: true },
      findById: { clientCache: true },
    },
    views: {},
  });
  provider._defineAsyncResource({
    name: "province",
    actions: {
      findMany: { clientCache: true },
      findById: { clientCache: true },
    },
    views: {},
  });
  provider._defineAsyncResource({
    name: "district",
    actions: {
      findMany: { clientCache: true },
      findById: { clientCache: true },
    },
    views: {},
  });
  provider._defineAsyncResource({
    name: "commune",
    actions: {
      findMany: { clientCache: true },
      findById: { clientCache: true },
    },
    views: {},
  });
  provider.$using(rootApiUrl);
}

init(mushroom);
init(mushroomFile);

const getImages = async (id) => {
  let imgSrc = await mushroomFile.$file.linkBuilder.thumb
    .id(id)
    .format("png")
    .build();
  return imgSrc;
};

const getProvider = async () => {
  const result = await mushroom.province.listAsync();
  console.log(result);
};

const getIntro = async (name = "") => {
  const response = await mushroom.ldp_cau_hinh.listAsync({
    ten: name,
  });
  return response;
};

const getDevelopmentIndex = async () => {
  const res = await mushroom.ldp_thong_ke.views.chi_so_phat_trienAsync();
  const data = res.result[0];
  return {
    family: data.so_dong_ho,
    user: data.so_nguoi_dung,
    provider: data.so_tinh,
  };
};

const getSlide = async () => {
  const slide = await mushroom.ldp_slide.listAsync();
  return slide;
};

const getTestimonial = async () => {
  const testimonial = await mushroom.ldp_danh_gia.listAsync();
  console.log({ testimonial });
};

const register = async ({
  fullName = "",
  providerId = "",
  districtId = "",
  communeId = "",
  familyName = " ",
  phone = "",
  address = "",
  vocative = " ",
  recaptchaToken = "",
  distance = " ",
  email = "",
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
  getDevelopmentIndex,
  getProvider,
  active,
  getIntro,
  sendMessage,
  changePassword,
  getToken,
  getSlide,
  getTestimonial,
  register,
  getImages,
};
