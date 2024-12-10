export default function NumberBaseFormatter(num: number) {
  return new Intl.NumberFormat('id-ID').format(num);
}
