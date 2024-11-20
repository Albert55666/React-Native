interface Category {
  id: string;
  title: string;
  color: string;
}

class Category {
  constructor({
    color,
    id,
    title,
  }: {
    id: string;
    title: string;
    color: string;
  }) {
    this.color = color;
    this.id = id;
    this.title = title;
  }
}

export default Category;
