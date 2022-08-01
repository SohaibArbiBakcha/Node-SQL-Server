exports.RH_Members = {
  getAllMembers: `select * from [dbo].[RH_Members] where 1=1`,
  getMemberById: "SELECT * FROM [dbo].[RH_Members] Where id = @id",
  addNewMember: `INSERT INTO [dbo].[RH_Members]
           ([Id]
           ,[Matricule]
           ,[NomComplet]
           ,[Qualification]
           ,[TypeContrat]
           ,[DateEmbauche]
           ,[DateFin]
           ,[Discription]
           ,[SituationActif]
           ,[Renouvellement])
     VALUES
           (@Id
           ,@Matricule
           ,@NomComplet
           ,@Qualification
           ,@TypeContrat
           ,@DateEmbauche
           ,@DateFin
           ,@Discription
           ,@SituationActif
           ,@Renouvellement)`,
  deleteMembers: "DELETE FROM [dbo].[RH_Members] Where Id = @id",
  updateMemberById: `UPDATE [dbo].[RH_Members]
   SET [Matricule] = @Matricule
      ,[NomComplet] = @NomComplet
      ,[Qualification] = @Qualification
      ,[TypeContrat] = @TypeContrat
      ,[DateEmbauche] = @DateEmbauche
      ,[DateFin] = @DateFin
      ,[Discription] = @Discription
      ,[SituationActif] =@SituationActif
      ,[Renouvellement] =@Renouvellement
      WHERE Id = @id`,
  getMemberCount: "select count(*) as count from [dbo].[RH_Members]",
};

exports.RH_Qualification = {
  addNewQualification: `INSERT INTO [dbo].[RH_Qualifications]
    ([libelle]) VALUES (@libelle)`,
  getAllQualification: `select * from [dbo].[RH_Qualifications]`,
  getQualificationById:
    "SELECT * FROM [dbo].[RH_Qualifications] Where id = @id",
  deleteQualifications: "DELETE FROM [dbo].[RH_Qualifications] Where Id = @id",
  updateQualifications:
    "UPDATE [dbo].[RH_Qualifications] SET [libelle] = @libelle WHERE Id = @id",
  getQualificationCount:
    "select count(*) as count from [dbo].[RH_Qualifications]",
};
