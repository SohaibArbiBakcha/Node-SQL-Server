exports.querys = {
  getAllFA: "select * from [dbo].[FaRemarqueEnvoyer]",
  getProducById: "SELECT * FROM [dbo].[FaRemarqueEnvoyer] Where CodeFA = @Id",
  addNewProduct:
    "INSERT INTO [dbo].[FaRemarqueEnvoyer] (CodeFA, FN) VALUES (@CodeFA,@FN);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
};
