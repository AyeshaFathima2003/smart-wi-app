export interface Asset {
  id: string;
  name: string;
  description: string;
  imageUrls: string[];  // Change from imageUrl (string) to imageUrls (array)
  status: "ok";
}
